import os 
import sys
import pandas as pd 
import numpy as np 
import json
import glob

#data= pd.read_csv('out.csv')

from surprise import Reader, Dataset

from sklearn.metrics.pairwise import cosine_similarity
from scipy import sparse


# load dataset from pandas df, need load_from_df method in surprise lib

from collections import OrderedDict
#path = './profiles'
#path = './otherprofiles'
path = './altdata'
all_files = glob.glob(path + "/*.json")
print(all_files)
json_list = []
for i in all_files:
    with open(i) as f:
        a = json.load(f, object_pairs_hook=OrderedDict)
        json_list.append(a)

#print(json_list)
#print(len(json_list))



p = pd.DataFrame(json_list)
p.reset_index(drop=True)


#print(p)

import matplotlib.pyplot as plt
import seaborn as sb

from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import StandardScaler
from sklearn.cross_validation import train_test_split
from sklearn.metrics import accuracy_score


#df = pd.read_csv('out3.csv', sep='\t', names=['userID', 'rating'])
cols = ['userID', 'rating', 'favInterest']
df = p[cols]
print(df.shape)
#print(df.describe())
#matrix = df.pivot_table(index='userID', columns='favInterest', values='rating')
#print(matrix.head())



def fast_similarity(ratings, kind='userID', epsilon=1e-9):
    # epsilon -> small number for handling dived-by-zero errors
    if kind == 'userID':
        sim = ratings.dot(ratings.T) + epsilon
    elif kind == 'rating':
        sim = ratings.T.dot(ratings) + epsilon
    norms = np.array([np.sqrt(np.diagonal(sim))])
    return (sim / norms / norms.T)

n_users = df.userID.unique().shape[0]
print(n_users)
ratings = np.zeros((n_users, n_users))
for row in df.itertuples():
    ratings[row[0]-1, row[0]-1] = row[2]
    #ratings[row[1]-1, row[1]-1] = row[2]

print(ratings)
sparsity = float(len(ratings.nonzero()[0]))
sparsity /= (ratings.shape[0] * ratings.shape[1])
sparsity *= 100
print('sparsity: {:4.2f}%'.format(sparsity))
# Normal user vectors to unit vectors

user_similarity = fast_similarity(ratings, kind='userID')
item_similarity = fast_similarity(ratings, kind='rating')
print(user_similarity[343, 413])
pddd = pd.DataFrame(user_similarity)
pddd.to_csv("what.csv")
# mag = sqrt(x2 + y2 + z2+ ..)
#magnitude = np.sqrt(np.square(p.username).sum(axis=1))


