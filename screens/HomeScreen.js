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
import { Divider } from 'react-native-elements'
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

const users = [
 {
    name: 'Sonam Ghosh',
    avatar: 'https://media.licdn.com/dms/image/C5603AQG5ONUJiEDStg/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=RvOqZTml4cyXyuBazzgMYqooqhmy1w24vssc4LpeW6o'
 },
]
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

  logoff = () => {
      this.props.navigation.navigate('Login');
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Memorial_Day_2013_%E2%80%93_San_Francisco_National_Cemetery_%E2%80%93_06.jpg'
    };
    let sonam = {
      uri: 'https://media.licdn.com/dms/image/C5603AQG5ONUJiEDStg/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=RvOqZTml4cyXyuBazzgMYqooqhmy1w24vssc4LpeW6o'
    };
    let nicole = {
      uri: 'https://media.licdn.com/dms/image/C5603AQF261MyxCC3Bw/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=qc0IoafKxPykJ2Blob2kEFqTjSULEE0K1Ofhb1uNh9g'
    };
    let bill = {
      uri: 'https://media.licdn.com/dms/image/C5603AQHv9IK9Ts0dFA/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=ULAiepVc0abj51GEPA7Feyv0YOB64s5Tk5xAuI2QyXQ'
    };
    return (
      <ScrollView style={styles.container}>
        <StatusBar hidden/>
        <TouchableOpacity onPress={this.logoff}>
          <Text>Log Off</Text>
        </TouchableOpacity>

        <View style={styles.sonamContainer}>
          <Image source={pic} style={styles.veteranPic}/>
          <Text style={styles.nameText}>John Smith</Text>
          <Text style={styles.profileText}>Boston, MA</Text>
          <Text style={styles.profileText}>Served in Afghanistan in 2012</Text>
          <Text style={styles.profileText}>US Navy Seal</Text>
        </View>

        <View style={styles.sonamContainer}>
          <View style={styles.sonamTop}>
            <Image source={sonam} style={styles.sonamPic}/>
            <View style={{flexDirection:'column'}}>
              <Text style={styles.commenterNameText}>Sonam Ghosh</Text>
              <Text style={{marginLeft: 10}}>Thank you for serving our country</Text>
            </View>
          </View>
          <Divider style={{ backgroundColor: 'lightgray' }} />
          <View style={styles.sonamBottom}>
            <Image style={{width: 25, height: 25, marginRight:20,}} source={require('../images/heart.png')} />
            <Image style={{width: 25, height: 25}} source={require('../images/share.png')} />
          </View>
        </View>

        <View style={styles.sonamContainer}>
          <View style={styles.sonamTop}>
            <Image source={bill} style={styles.sonamPic}/>
            <View style={{flexDirection:'column'}}>
              <Text style={styles.commenterNameText}>Bill Gates</Text>
              <Text style={{marginLeft:10}}>I donated to your charity</Text>
            </View>
          </View>
          <Divider style={{ backgroundColor: 'lightgray' }} />
          <View style={styles.sonamBottom}>
            <Image style={{width: 25, height: 25, marginRight:20,}} source={require('../images/heart.png')} />
            <Image style={{width: 25, height: 25}} source={require('../images/share.png')} />
          </View>
        </View>

        <View style={styles.sonamContainer}>
          <View style={styles.sonamTop}>
            <Image source={nicole} style={styles.sonamPic}/>
            <View style={{flexDirection:'column'}}>
              <Text style={styles.commenterNameText}>Nicole Chen</Text>
              <Text style={{marginLeft:10}}>I can carry you in League</Text>
            </View>
          </View>
          <Divider style={{ backgroundColor: 'lightgray' }} />
          <View style={styles.sonamBottom}>
            <Image style={{width: 25, height: 25, marginRight:20,}} source={require('../images/heart.png')} />
            <Image style={{width: 25, height: 25}} source={require('../images/share.png')} />
          </View>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  veteranPic: {
    flexDirection: 'row',
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
  },
  profileText: {
    textAlign: 'center',
    padding: 10,
  },
  sonamPic: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  sonamContainer: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 2,
    shadowColor: 'lightgray',
    shadowOffset: { width: 0, height: .5 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
  sonamTop: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 15,
  },
  sonamBottom: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  nameText: {
    fontWeight:'bold',
    fontSize:20,
    textAlign: 'center'
  },
  commenterNameText: {
    fontWeight:'bold',
    fontSize:15,
    marginLeft: 10,
  },


});
