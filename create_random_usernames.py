import os
import sys
import json
import pandas as pd
import numpy as np
import random
from random import uniform
import requests

first_names = ['Sonam', 'Halmon', 'Nicole', 'Mariah', 'John', 'Sam',
         'Dan', 'Kevin', 'William', 'Sophia', 'Vanessa', 'Brian',
         'Linden', 'Tommy', 'Cindy', 'Susenna', 'Thomas', 'Jarod', 'Cynthia',
         'Bill', 'Gwen', 'Avery', 'Raj', 'Sarah', 'Clara', 'Carrie', 'Dat', 'Anton', 'Peter', 'Yoshi' , 'Wollo']

last_names = ['Chen', 'Lui', 'Ghosh', 'Petit', 'Tang', 'Wan', 'He',
              'Smith', 'Buccat', 'Chan', 'Mac', 'Wu', 'Lam', 'Cheung', 'Lee', 
              'Roy', 'Duong', 'Kim', 'Miyazaki', 'Chanyeol', 'Ngyuen', 'Chang', 'Bui', 'Ng',
              'Baker', 'Obama', 'Clinton', 'Obu', 'Takahara', 'Ossaaes', 'Abdzerazaq', 'Sauer']

# Generate random passwords
s = "abcdefghijklmnopqrstuvwxyz01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()?"
passlen = 8

passwords = ["".join(random.sample(s, passlen)) for _ in range(500)]

interests = ["tech", "food", "philosophy", "learning",
            "fitness", "outdoors", "photography", "drinks",
            "music", "language", "film", "sci-fi",
            "books", "art", "gaming", "lgbtq", "dance", "career",
            "fashion", "travel"]


info = {'username': '', 'userID': 0,
        'name': {'first': '', 'last': ''}, 'password': '', 'age': 0, 
        'interests': '', 'favInterest': '',
        'tech': 0, 'food': 0, 'philosophy': 0, 'learning': 0, 'fitness': 0, 'outdoors':0,
        'photography': 0, 'drinks': 0, 'music': 0, 'language': 0, 'film': 0, 'sci-fi':0,
        'books': 0, 'art': 0, 'gaming': 0, 'lgbtq': 0, 'dance': 0, 'career': 0,
        'fashion': 0, 'travel': 0, 'rating': 0,
        'branch': [], 'location': {'city': '', 'state': '', 'country': ''}, 'geotag': {'lat': 0.0, 'long': 0.0}}






# Prints 20 numbers
age = [random.randint(17, 72) for _ in range(500)]


# Generate a bunch within boston
#a, b = gen_random_coord(42.361145, -71.057083, 5)
#print(a, b)

#x, y = uniform(-90,90), uniform(-180, 180)
#print('lat, long = ', x, y)

lat = [uniform(-71.10000, -71.057083) for _ in range(500)]
lon = [uniform(42.34, 42.361145) for _ in range(500)]
#print(lat)
#print(lon)

# Generate random user names



usernames = [first_names[random.randint(0, len(first_names)-1)].lower() + \
             last_names[random.randint(0, len(last_names)-1)].lower() + \
             str(random.randint(2, 999)) for _ in range(500)]

fns = []
lns = []
usnames = []

for _ in range(500):
    fn = first_names[random.randint(0, len(first_names)-1)]
    ln = last_names[random.randint(0, len(last_names)-1)]
    usname = fn.lower() + ln.lower() + str(random.randint(2, 999))
    fns.append(fn)
    lns.append(ln)
    usnames.append(usname)

#print(fns)
#print(lns)
#print(usnames)


#print(first_names[random.randint(0, len(first_names))] + last_names[random.randint(0, len(last_names))].lower() + str(random.randint(2,99)))

# Generate Pairs of interests
interest_pairs = [(interests[random.randint(0, len(interests)-1)], interests[random.randint(0, len(interests)-1)]) for _ in range(500)]
#print(interest_pairs)

"""
["tech", "food", "philosophy", "learning",
            "fitness", "outdoors", "photography", "drinks",
            "music", "language", "film", "sci-fi",
            "books", "art", "gaming", "lgbtq", "dance", "career",
            "fashion", "travel"]
"""


infoz = []
rtings = []
fvinterests = []
for _ in range(500):
    tup = [0 for _ in range(random.randint(1, 5))]
    idxs = random.sample(range(0, len(interests)), len(tup))
    for i in range(len(tup)):
        tup[i] = [interests[j] for j in idxs]
        #tt = '|'.join(tup[i])
        infoz.append(tup[i])
        # Choose random interest
        ri = random.choice(tup[i])
        fvinterests.append(ri)
        rtings.append(interests.index(ri) + 1)

#print(infoz)


# Branch mmilitary rand
branches = ['Army', 'Navy', 'Marine Corps', 'Air Force', 'Coast Guard']
bchs = [random.choice(branches) for _ in range(500)]



# Empty Json Shell
"""
info = {'username': '', 'name': {'first': '', 'last': ''}, 'password': '', 'age': 0, 'interests': '',
       'branch': [], 'location': {'city': '', 'state': '', 'country': ''}, 'geotag': {'lat': 0.0, 'long': 0.0}}
"""

choices = ["tech", "food", "philosophy", "learning",
                 "fitness", "outdoors", "photography", "drinks",
                 "music", "language", "film", "sci-fi",
                 "books", "art", "gaming", "lgbtq", "dance", "career",
                 "fashion", "travel"]
# Generate Profiles
for i in range(500):
    info['username'] = usnames[i]
    info['userID'] = 'u'+str(i+1)
    info['name']['first'] = fns[i]
    info['name']['last'] = lns[i]
    info['password'] = passwords[i]
    info['age'] = age[i]
    info['interests'] = infoz[i]
    for j in infoz[i]:
        if j in choices:
            info[j] = 1
    info['favInterest'] = fvinterests[i]
    info['rating'] = rtings[i]
    info['branch'] = bchs[i]
    info['location']['city'] = 'Boston'
    info['location']['state'] = 'MA'
    info['location']['country'] = 'USA'
    info['geotag']['lat'] = lat[i]
    info['geotag']['long'] = lon[i]
    with open('./altdata/' + usnames[i] + '.json', 'w') as f:
        json.dump(info, f, indent=4)
    info = {'username': '', 'name': {'first': '', 'last': ''}, 'password': '', 'age': 0, 
        'interests': '',
        'tech': 0, 'food': 0, 'philosophy': 0, 'learning': 0, 'fitness': 0, 'outdoors':0,
        'photography': 0, 'drinks': 0, 'music': 0, 'language': 0, 'film': 0, 'sci-fi':0,
        'books': 0, 'art': 0, 'gaming': 0, 'lgbtq': 0, 'dance': 0, 'career': 0,
        'fashion': 0, 'travel': 0,
        'branch': [], 'location': {'city': '', 'state': '', 'country': ''}, 'geotag': {'lat': 0.0, 'long': 0.0}}
