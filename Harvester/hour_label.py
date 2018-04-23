# couch db
from couchdb import Server

server = Server('http://admin:sweetheart@115.146.86.47:5986/')
try:
    db = server['tweets_search_mel']
except:
    db = server.create('tweets_search_mel')


# tweet_time is ntime
# doc['user']['created_at']
def time_label(tweet_time):
    time_parse = tweet_time.split(' ')[3]
    time_tag = time_parse[:2]
    return time_tag
