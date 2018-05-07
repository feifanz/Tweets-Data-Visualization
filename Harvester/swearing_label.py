# couch db
# from couchdb import Server
import re

# server = Server('http://admin:sweetheart@115.146.86.47:5986/')
# try:
#     db = server['tweets_search_mel']
# except:
#     db = server.create('tweets_search_mel')

import csv
with open('corpus.txt',encoding="utf8", errors='ignore') as inputfile:
    word_corpus=csv.reader(inputfile,delimiter='\n')
    # print(word_corpus)
    corpus=[]
    for row in word_corpus:
        corpus.append((', '.join(row)))

def lable_swearing(tweet):
    wordlist=tweet.split(' ')
    count=0
    for everyword in wordlist:
        everyword=everyword.lower()
        everyword=re.sub('[^0-9a-zA-Z]+', '', everyword)
        if everyword in corpus:
            # print(everyword)
            count=count+1
    if count>0:
        # indexco+=1
        return 'Yes'
    else:
        return 'No'
