import os
import sys
import json
import pandas as pd
import numpy as np
import random

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
print(len(p))



# Empty Json Shell
info = {'username': '', 'firstname': '', 'lastname': '', 'password': '', 'age' = 0, 'interests': [], 
        'branch': [], 'location': {'city': '', 'state': '', 'country': ''}, 'geotag': {'lat': 0.0, 'long': 0.0}
        }
