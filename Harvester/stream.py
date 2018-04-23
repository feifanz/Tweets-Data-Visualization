import tweepy
from couchdb import Server
import json
import time
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import sys
from config import *
from count_topic import *


#get args from terminal
GEOBOX = GEOBOXS['melbourne']
DB_Name = 'tweets_stream_mel'
if len(sys.argv) > 1:
    if sys.argv[1] == 'sydney' or sys.argv[1] == 'melbourne':
        GEOBOX = GEOBOXS[sys.argv[1]]
        DB_Name = 'tweets_stream_' + sys.argv[1][0:3]
    else:
        print("wrong city name should be (sydney or melbourne)")
        sys.exit()

auth_id = 0
if len(sys.argv) > 2:
    auth_id = int(sys.argv[2])


#connet to couchdb
#server = Server('http://admin:admin@127.0.0.1:5984/')
server = Server(SERVER_ADDR)
try:
    db = server[DB_Name]
except:
    db = server.create(DB_Name)



#instance of do sentiment analysis
analyzer = SentimentIntensityAnalyzer()


class MyStreamListener(tweepy.StreamListener):
    def on_data(self, data):
        try:
            tweet = json.loads(data)
            nid = tweet["id_str"]

            if nid in db:
                print('--------already saved----------------')
                return True
            else:
                ntext = tweet['text']
                ncoordinates = tweet['coordinates']
                nuser = tweet['user']
                ntime = tweet['created_at']
                nplace = tweet['place']
                nentities = tweet['entities']
                sentiment = analyzer.polarity_scores(ntext)
                topic = give_label(text)
                #generate new tweeter
                ndoc = {'_id': nid, 'text': ntext, 'user': nuser,
                        'coordinates': ncoordinates, 'create_time': ntime,
                        'place': nplace, 'entities': nentities,
                        'addressed': False, 'sentiment': sentiment, 'topic': topic}
                db.save(ndoc)
                print(nid)
                print('-------------------------------------')
                return True
        except BaseException as e:
            print("Error on_data: %s" % str(e))

        return True


    def on_error(self, status):
        print(status)
        """ Handle any error throws from stream API """
        if status == 420:
            self.on_timeout()


    def on_timeout(self):
        """ Handle time out when API reach its limit """
        print("API Reach its limit, sleep for 10 minutes")
        time.sleep(60*16)
        return


#print config information
print('Auth_id: ' + str(auth_id))
print('GEOCODE: ' + str(GEOBOX))
print('database: ' + DB_Name)


#auth twitter account
consumer_key = AUTH[auth_id]['consumer_key']
consumer_secret = AUTH[auth_id]['consumer_secret']
access_token = AUTH[auth_id]['access_token']
access_token_secret = AUTH[auth_id]['access_token_secret']
# Creation of the actual interface, using authentication
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

#start stream app
myStreamListener = MyStreamListener()
myStream = tweepy.Stream(auth = api.auth, listener=myStreamListener)
myStream.filter(locations=GEOBOX, languages=["en"])