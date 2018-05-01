from couchdb import Server
from config import *
import json
import tweepy
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer


DB_Name = 'tweets_stream_syd'
#connet to couchdb server
server = Server('http://admin:sweetheart@115.146.86.47:5986/')
try:
    db = server[DB_Name]
except:
    db = server.create(DB_Name)

auth_id = 1
#auth twitter account
consumer_key = AUTH[auth_id]['consumer_key']
consumer_secret = AUTH[auth_id]['consumer_secret']
access_token = AUTH[auth_id]['access_token']
access_token_secret = AUTH[auth_id]['access_token_secret']
# Switching to application authentication
auth = tweepy.AppAuthHandler(consumer_key, consumer_secret)
# Setting up new api wrapper, using authentication only
api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)

#instance of do sentiment analysis
analyzer = SentimentIntensityAnalyzer()


print(db)
name_list = []
for id in db:
    print(id)
    print(db[id]['user']['screen_name'])
    if db[id]['user']['screen_name'] in name_list:
        continue
    name_list.append(db[id]['user']['screen_name'])
    try:
        stuff = api.user_timeline(screen_name=db[id]['user']['screen_name'], include_rts=True)
        for status in stuff:
            njson = json.dumps(status._json, ensure_ascii=False)
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
                #generate new tweeter
                ndoc = {'_id': nid, 'text': ntext, 'user': nuser,
                        'coordinates': ncoordinates, 'create_time': ntime,
                        'place': nplace, 'entities': nentities,
                        'addressed': False,'sentiment' : sentiment}
                db.save(ndoc)
                print(nid)
                print('********************************************')
    except:
        print('wrong screen name')

