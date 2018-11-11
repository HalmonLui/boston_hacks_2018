import os 
import sys
import pandas as pd 
import numpy as np 
import json
import glob

# Dataframe of data 
file = './profiles/sonamghosh42.json'
file2 = './profiles/cindycheung53.json'

with open(file) as f:
    dict_train = json.load(f)

with open(file2) as f:
    dict_train2 = json.load(f)

t1 = pd.DataFrame.from_dict(dict_train, orient='index')
t1.reset_index(level=0, inplace=True)

t2 = pd.DataFrame.from_dict(dict_train2, orient='index')
t2.reset_index(level=0, inplace=True)

from collections import OrderedDict
#path = './profiles'
#path = './otherprofiles'
path = './otherprofiles'
all_files = glob.glob(path + "/*.json")
print(all_files)
json_list = []
for i in all_files:
    with open(i) as f:
        a = json.load(f, object_pairs_hook=OrderedDict)
        json_list.append(a)

print(json_list)
print(len(json_list))



p = pd.DataFrame(json_list)
print(p)

print(p.shape)
p.to_csv('out4.csv')
