// src/client.js
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBltFlZro-rO1fRxcQ2avkl8owKZ5DRccQ",
  authDomain: "Yvethack-7f18d.firebaseapp.com",
  databaseURL: "https://vethack-7f18d.firebaseio.com",
  storageBucket: "vethack-7f18d.appspot.com",
  messagingSenderId: "526125858334"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider()
