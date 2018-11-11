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
         'Linden', 'Tommy', 'Cindy', 'Susenna']

last_names = ['Chen', 'Lui', 'Ghosh', 'Petit', 'Tang', 'Wan', 'He',
              'Smith', 'Buccat', 'Chan', 'Mac', 'Wu', 'Lam', 'Cheung']

# Generate random passwords
s = "abcdefghijklmnopqrstuvwxyz01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()?"
passlen = 8

passwords = ["".join(random.sample(s, passlen)) for _ in range(20)]

interests = ["tech", "food", "philosophy", "learning",
            "fitness", "outdoors", "photography", "drinks",
            "music", "language", "film", "sci-fi",
            "books", "art", "gaming", "lgbtq", "dance", "career",
            "fashion", "travel"]

# Prints 20 numbers
age = [random.randint(17, 72) for _ in range(20)]


# Generate a bunch within boston
#a, b = gen_random_coord(42.361145, -71.057083, 5)
#print(a, b)

#x, y = uniform(-90,90), uniform(-180, 180)
#print('lat, long = ', x, y)

lat = [uniform(-71.10000, -71.057083) for _ in range(20)]
lon = [uniform(42.34, 42.361145) for _ in range(20)]
#print(lat)
#print(lon)

# Generate random user names



usernames = [first_names[random.randint(0, len(first_names)-1)].lower() + \
             last_names[random.randint(0, len(last_names)-1)].lower() + \
             str(random.randint(2, 99)) for _ in range(20)]

fns = []
lns = []
usnames = []

for _ in range(20):
    fn = first_names[random.randint(0, len(first_names)-1)]
    ln = last_names[random.randint(0, len(last_names)-1)]
    usname = fn.lower() + ln.lower() + str(random.randint(2, 99))
    fns.append(fn)
    lns.append(ln)
    usnames.append(usname)

#print(fns)
#print(lns)
#print(usnames)


#print(first_names[random.randint(0, len(first_names))] + last_names[random.randint(0, len(last_names))].lower() + str(random.randint(2,99)))

# Generate Pairs of interests
interest_pairs = [(interests[random.randint(0, len(interests)-1)], interests[random.randint(0, len(interests)-1)]) for _ in range(20)]
#print(interest_pairs)

infoz = []
for _ in range(20):
    tup = [0 for _ in range(random.randint(1, 5))]
    idxs = random.sample(range(0, len(interests)), len(tup))
    for i in range(len(tup)):
        tup[i] = [interests[j] for j in idxs]
        infoz.append(tup[i])

print(infoz)


# Branch mmilitary rand
branches = ['Army', 'Navy', 'Marine Corps', 'Air Force', 'Coast Guard']
bchs = [random.choice(branches) for _ in range(20)]



# Empty Json Shell
info = {'username': '', 'name': {'first': '', 'last': ''}, 'password': '', 'age': 0, 'interests': [],
       'branch': [], 'location': {'city': '', 'state': '', 'country': ''}, 'geotag': {'lat': 0.0, 'long': 0.0}}

# Generate Profiles
for i in range(20):
    info['username'] = usnames[i]
    info['name']['first'] = fns[i]
    info['name']['last'] = lns[i]
    info['password'] = passwords[i]
    info['age'] = age[i]
    info['interests'] = infoz[i]
    info['branch'] = bchs[i]
    info['location']['city'] = 'Boston'
    info['location']['state'] = 'MA'
    info['location']['country'] = 'USA'
    info['geotag']['lat'] = lat[i]
    info['geotag']['long'] = lon[i]
    with open('./profiles/' + usnames[i] + '.json', 'w') as f:
        json.dump(info, f, indent=4)

