import ssl
ssl._create_default_https_context = ssl._create_unverified_context

from sklearn.datasets import fetch_20newsgroups
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import RidgeClassifier
# from couchdb import Server
import re
import nltk
# from collections import defaultdict
#
#
# server = Server('http://admin:sweetheart@115.146.86.47:5986/')
# try:
#     db = server['tweets_search_mel']
# except:
#     db = server.create('tweets_search_mel')


# training dataset
remove = ('headers', 'footers', 'quotes')
data_train = fetch_20newsgroups(subset='train', categories=None,
                                shuffle=True, random_state=42,
                                remove=remove)
target_names = data_train.target_names
vectorizer = TfidfVectorizer(sublinear_tf=True, max_df=0.5,
                             stop_words='english')
X_train = vectorizer.fit_transform(data_train.data)
clf = RidgeClassifier(tol=1e-2, solver="lsqr")
y_train = data_train.target
clf.fit(X_train, y_train)


# print("start predict:")
def classify_tweeet(tweet, vectorizer, classifier):
    X_test = vectorizer.transform(tweet)
    pred = classifier.predict(X_test)
    df = classifier.decision_function(X_test)
    score = df[0][int(pred)]
    if score >= float(-0.3):
        t = target_names[int(pred)]
    else:
        t = 'Unable to classify'
    return t


# preprocess
lemmatizer = nltk.stem.wordnet.WordNetLemmatizer()
def preporcess(tweet, lemmatize):
    p_tweet = tweet.split(' ')
    ready_tweet = []
    for word in p_tweet:
        word = re.sub('[^0-9a-zA-Z]+', '', word.lower())
        if lemmatize:
            lemma = lemmatizer.lemmatize(word, 'v')
            if lemma == word:
                lemma = lemmatizer.lemmatize(word, 'n')
            word = lemma
        ready_tweet.append(word)
    return ready_tweet


# pre_dict = {}
# topic_count = defaultdict(int)
# for key in db:
#     tweet = preporcess(db[key]['text'], True)
#     input_t = [' '.join(tweet)]
#     # print(input_t)
#     label = classify_tweeet(input_t, vectorizer, clf)
#     pre_dict[db[key]['_id']] = label
#     # print(label)
#     topic_count[label] += 1
#     ndoc = db[key]
#     ndoc['topic'] = label
#     db[ndoc.id] = ndoc

# for item in topic_count:
#     print(item, topic_count[item])

def give_label(tweet):
    tweet = preporcess(tweet, True)
    input_t = [' '.join(tweet)]
    # print(input_t)
    label = classify_tweeet(input_t, vectorizer, clf)
    # pre_dict[db[key]['_id']] = label
    # print(label)
    # topic_count[label] += 1
    return label


