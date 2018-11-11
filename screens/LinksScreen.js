import React from 'react';
import { View, ScrollView, StyleSheet, Text, AppRegistry, Image, TouchableOpacity, TextInput, ImageBackground} from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Events',
  };

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Memorial_Day_2013_%E2%80%93_San_Francisco_National_Cemetery_%E2%80%93_06.jpg'
    };
    return (
      <ScrollView style={styles.container}>

      <SearchBar
        lightTheme
        containerStyle={styles.SearchBar}
        inputStyle={styles.SearchBarInput}
        searchIcon={{ size: 24 }}
        placeholder='Search' />


        <Text style={styles.header}>Invites</Text>
        <View style={styles.Invites}>
          <TouchableOpacity>
            <Image source={pic} style={styles.veteranPic}/>
          </TouchableOpacity>
          <View style={styles.InvitesMessage}>
            <TouchableOpacity>
              <Text> John Cena invited you to ... </Text>
            </TouchableOpacity>
          </View>
        </View>



        <Text style={styles.header}>Popular Events Near You</Text>
            <ScrollView style={styles.boxes} horizontal='true'>
                <TouchableOpacity style={styles.eventbutton}>
                  <ImageBackground style={styles.eventImage} imageStyle={{ borderRadius: 5 }} source={require('../images/hiking.jpg')} >
                    <Text style={styles.eventheader}> Hiking</Text>
                  </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.eventbutton}>
                  <ImageBackground style={styles.eventImage} imageStyle={{ borderRadius: 5 }} source={require('../images/kayak.jpg')}>
                    <Text style={styles.eventheader}> Kayaking</Text>
                  </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.eventbutton}>
                  <ImageBackground style={styles.eventImage} imageStyle={{ borderRadius: 5 }} source={require('../images/baseball.jpg')}>
                    <Text style={styles.eventheader}> Baseball</Text>
                  </ImageBackground>
                </TouchableOpacity>

            </ScrollView>

        <Text style={styles.header}>Veterans Nearby</Text>

        <View style={styles.nearbyvets}>
            <TouchableOpacity>
              <Image source={pic} style={styles.veteranPic}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={pic} style={styles.veteranPic}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={pic} style={styles.veteranPic}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={pic} style={styles.veteranPic}/>
            </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15,
    textAlign: 'left',
    textAlignVertical: 'bottom',
    color: '#000',
  },
  eventheader: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15,
    textAlign: 'left',
    textAlignVertical: 'bottom',
    color: '#fff',
  },
  eventbutton: {
    height: 250,
    width: 175,
    backgroundColor: 'white',
    marginLeft: 15,
    color: '#fff',
    margin: 15,
  },
  boxes: {
    flex:1,
    flexDirection:'row',
  },
  veteranPic: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    marginLeft: 15,
  },
  SearchBar: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor:'#fff',
  },
  nearbyvets: {
    flexDirection: 'row',
  },
  seeall: {
    flexDirection: 'row',
  },
  eventImage: {
    flex: 1,
    width: '100%',
  },
  SearchBarInput: {
    backgroundColor: 'white',
  },
  Invites: {
    flexDirection: 'row',
  },
  InvitesMessage: {
    backgroundColor: 'white',
    marginLeft: 15,
  }
});
