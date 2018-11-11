import React, { Component } from 'react';
import firebase from 'firebase'


const config = {
  apiKey: "AIzaSyBltFlZro-rO1fRxcQ2avkl8owKZ5DRccQ",
  authDomain: "Yvethack-7f18d.firebaseapp.com",
  databaseURL: "https://vethack-7f18d.firebaseio.com",
  storageBucket: "vethack-7f18d.appspot.com",
  messagingSenderId: "526125858334"
}

firebase.initializeApp(config)

const auth = firebase.auth
const provider = new firebase.auth.FacebookAuthProvider();


class Login extends Component {

  state = {
    user: null
  }

  login = () => {
    auth().signInWithPopup(provider)
      .then(({ user }) => {
        this.setState({ user })
      })
  }

  logout = () => {
    auth().signOut().then(() => {
      this.setState({ user: null })
    })
  }

  render() {
    const { user } = this.state
    return (
      <div className='Login'>
        <p>{user ? `Hi, ${user.displayName}!` : 'Hi!'}</p>
        <button onClick={this.login}>
          Login with Facebook
        </button>

        <button onClick={this.logout}>
          Logout
        </button>
      </div>
    );
  }
  componentWillMount() {
  auth.onAuthStateChanged().then(user => {
    if (user) {
      this.setState({ user })
    }
  })
  }
}



export default Login;
