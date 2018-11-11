import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Button,
  Spacer,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailSignIn: 'false'
    }
  };

  static navigationOptions = {
    header: null,
  };

  emailSignIn() {
    this.setState({emailSignIn: 'true'})
  };

  backButton() {
    this.setState({emailSignIn: 'false'})
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden/>

        {
          (this.state.emailSignIn == "false") &&

          <View style={styles.boxContainer}>
          <Image source={require('../images/logo.png')} style={styles.logo}/>
          <Text style={styles.lighttext}> Serving those who served </Text>
          <TouchableOpacity
            style={styles.fbbutton}
            onPress={() =>
            navigate()}
          >
            <Text style={styles.whiteheader}>Sign in with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
             style={styles.button}
             onPress={() => this.emailSignIn()}
          >
            <Text style={styles.whiteheader}> Sign in with email</Text>
          </TouchableOpacity>
          <TouchableOpacity
             style={styles.clickabletext}
             onPress={() =>
             navigate()
          }>
            <Text style={styles.header}>Make an account</Text>
          </TouchableOpacity>
        </View>}

        {
          (this.state.emailSignIn=="true") &&
          <KeyboardAvoidingView style={styles.boxContainer}>
            <TouchableOpacity
              onPress={() => this.backButton()}>
              <Text>BACK</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.loginText, textAlign='left'}
              placeholder="Email" />

            <TextInput
              style={styles.loginText, textAlign='left'}
              secureTextEntry={true}
              placeholder="Password" />

            <TouchableOpacity
               style={styles.clickabletext}
               onPress={() =>
               navigate()
            }>
              <Text style={styles.header}>Sign In</Text>
            </TouchableOpacity>





          </KeyboardAvoidingView>
        }


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A556D',
  },
  appname: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    color: 'grey',
  },
  logo: {
    alignSelf: 'center',
  },
  lighttext: {
    fontSize: 16,
    textAlign: 'center',
    color: 'lightgrey',
  },
  loginText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: 'lightgrey',
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  whiteheader: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#5097d5',
    margin: 10,
    padding: 10,
  },
  fbbutton: {
    backgroundColor: '#3D5B69',
    margin: 10,
    padding: 10,
  },
  boxContainer: {
    backgroundColor: 'rgb(246, 246, 246)',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 20,
    padding: 30,
    width: '100%',
  },
  clickabletext: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,

  }


});
