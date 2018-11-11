import numpy as np 
import pandas as pd 
import torch
import torch.nn as nn 
import torch.nn.parallel
import torch.nn.optim as optim 
import torch.utils.data 
from torch.autograd import Variable

# Li et. al. Collaborative Autoencoder for Recommender Systems 2017
# import dataset
usernames = pd.read_csv('out4.csv', engine='python')
ratings = pd.read_csv('out4.csv', engine='python')
interests = pd.read_csv('out4.csv', engine='python', sep='|')

# preparing the training set and test set
training_set = pd.read_csv('./altdata/out4.base', delimiter='\t')
training_set = np.array(training_set, dtype='int')
test_set = pd.read_csv('./altdata/out4.test', delimiter='\t')
test_set = np.array(test_set, dtype='int')

# Getting the number of users and movies
nb_users = int(max(max(training_set[:,0]), max(test_set[:,0])))
nb_interests = int(max(max(training_set[:,0]), max(test_set[:,0])))

# convert data in array with users in lines and interests in other col
def convert(data):
    new_data = []
    for id_users in range(1, nb_users + 1):
        id_interests = data[:,1][data[:,0] == id_users]
        id_ratings = data[:,2][data[:,0] == id_users]
        ratings = np.zeros(nb_interests)
        ratings[id_interests - 1] = id_ratings
        new_data.append(list(ratings))
    return new_data

training_set = torch.FloatTensor(convert(training_set))
test_set = torch.FloatTensor(convert(test_set))

# create NN
class NCA(nn.Module):
    def __init__(self, ):
        super(NCA, self).__init__()
        self.fc1 = nn.Linear(nb_interests, 20)
        self.fc2 = nn.Linear(20, 10)
        self.fc3 = nn.Linear(10, 20)
        self.fc4 = nn.Linear(20, nb_interests)
        self.activation = nn.Sigmoid()
    def forward(self, x):
        x = self.activation(self.fc1(x))
        x = self.activation(self.fc2(x))
        x = self.activation(self.fc3(x))
        x = self.fc4(x)
        return x

    nca = NCA()
criterion = nn.MSELoss()
optimizer = optim.RMSprop(sae.parameters(), lr = 0.01, weight_decay = 0.5)

