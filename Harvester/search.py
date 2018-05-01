import tweepy
from couchdb import Server
import json
import time
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import sys
from config import *



#get args from terminal
GEOCODE = GEOCODES['melbourne']
# select a city melbourne and sydney
DB_Name = 'tweets_search_mel'
if len(sys.argv) > 1 :
    if sys.argv[1] == 'sydney' or sys.argv[1] == 'melbourne' :
        GEOCODE = GEOCODES[sys.argv[1]]
        DB_Name = 'tweets_search_' + sys.argv[1][0:3]
    else:
        print("wrong city name should be (sydney or melbourne)")
        sys.exit()

auth_id = 2
if len(sys.argv) > 2:
    auth_id = int(sys.argv[2])


#auth twitter account
consumer_key = AUTH[auth_id]['consumer_key']
consumer_secret = AUTH[auth_id]['consumer_secret']
access_token = AUTH[auth_id]['access_token']
access_token_secret = AUTH[auth_id]['access_token_secret']
# Switching to application authentication
auth = tweepy.AppAuthHandler(consumer_key, consumer_secret)
# Setting up new api wrapper, using authentication only
api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)



#connet to couchdb server
server = Server(SERVER_ADDR)
try:
    db = server[DB_Name]
except:
    db = server.create(DB_Name)

#print config information
print('Auth_id: '+ str(auth_id))
print('GEOCODE: ' + GEOCODE )
print('database: ' + DB_Name)

#instance of do sentiment analysis
analyzer = SentimentIntensityAnalyzer()



def start_stream():
    while True:
        try:
            # start collect data
            for data in tweepy.Cursor(api.search, q="*", geocode=GEOCODE, lang="en").items():
                while True:
                    try:
                        njson = json.dumps(data._json, ensure_ascii=False)
                        doc = json.loads(njson)
                        nid = doc['id_str']

                        if nid in db:
                            print('--------already saved----------------')
                        else:
                            ntext = doc['text']
                            ncoordinates = doc['coordinates']
                            nuser = doc['user']
                            ntime = doc['created_at']
                            nplace = doc['place']
                            nentities = doc['entities']
                            sentiment = analyzer.polarity_scores(ntext)
                            # generate new tweeter
                            ndoc = {'_id': nid, 'text': ntext, 'user': nuser,
                                    'coordinates': ncoordinates, 'create_time': ntime,
                                    'place': nplace, 'entities': nentities,
                                    'addressed': False, 'sentiment': sentiment}
                            db.save(ndoc)
                            print(nid)
                            print('********************************************')
                    except tweepy.TweepError:
                        time.sleep(60 * 16)
                        continue
                    break
        except:
            continue

start_stream()