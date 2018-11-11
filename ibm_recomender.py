PATH_TO_DATA = ".out4.csv"

# load ratings data
ratings = spark.read_csv(PATH_TO_DATA, header=True, inferSchema=True)
ratings.cache()

# Number of ratings ( interests)
ratings = ratings.select(
        ratings.userID, ratings.username, ratings.rating, ratings.interests)

from pyspark.sql.functions import udf
from pyspark.sql.types import *


extract_interests = udf(lambda x: x.lower().split("|"), ArrayType(StringType()))

import re 

def extract_username(uname):
    result = re.search(uname)
    try:
        if result:
            group = result.group()
            interests = groip[1:-1]
            return (uname, interests)
        else:
            return (uname, None)
    except:
        print(uname)

from elasticsearch import Elasticsearch 

es = Elasticsearch()
es.info(pretty=True)


ratings.write.format("es").save("demo/ratings")

# Recommender model
ratings_from_es = spark.read.format("es").load("demo/ratings")
ratings_from_es.show()

from pyspark.ml.recommendation import ALS
from pyspark.sql.functions import col

als = ALS(userCol="userID", itemCol="interests", ratingCol="ratings",
          regParam=0.01, rank=20, seed=12)

model = als.fit(ratings_from_es)

# Utility
from pyspark.sql.types import *
from pyspark.sql.functions import udf, lit

def convert_vector(x):
    return " ".join('%s|%s' % (i, v) for i, v in enumerate(x))

def reverse_convert(s):
    return [float(f.split("|")[1]) for f in s.split(" ")]

def vector_to_struct(x, version, ts):
    return [convert_vector(x), version, ts]

vector_struct = uidf(vector_struct)

test_vec = nmodel.userFactors.select("features").first().features
ver = model.uid

