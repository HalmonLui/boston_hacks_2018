from flask import Flask, request
from flask_cors import CORS
import requests
import json

import sys

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello():
    return "Hello World"
