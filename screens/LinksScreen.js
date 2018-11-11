import React from 'react';
import { View, ScrollView, StyleSheet, Text, AppRegistry, Image, TouchableOpacity, TextInput} from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Memorial_Day_2013_%E2%80%93_San_Francisco_National_Cemetery_%E2%80%93_06.jpg'
    };
    return (
      <ScrollView style={styles.container}>

        <View style={styles.search}>
          <TextInput
            style={styles.lighttext}
            placeholder="Search for events" />
          <TouchableOpacity
              style={styles.enterbutton}
              onPress={() =>
              navigate()}>
            <Text style={styles.header}>Enter</Text>
          </TouchableOpacity>
        </View>



        <Text style={styles.header}>Invites</Text>
        <TouchableOpacity>
          <Image source={pic} style={styles.veteranPic}/>
        </TouchableOpacity>



        <Text style={styles.header}>Popular Events Near You</Text>
            <ScrollView style={styles.boxes} horizontal='true'>
                <TouchableOpacity
                   style={styles.eventbutton}>
                  <Text style={styles.header, textAlign='left',
                              textAlignVertical='bottom'}> event name</Text>
                </TouchableOpacity>

                <TouchableOpacity
                   style={styles.eventbutton}>
                  <Text style={styles.header, textAlign='left',
                              textAlignVertical='bottom'}> event name</Text>
                </TouchableOpacity>

                <TouchableOpacity
                   style={styles.eventbutton}>
                  <Text style={styles.header, textAlign='left',
                              textAlignVertical='bottom'}> event name</Text>
                </TouchableOpacity>

                <TouchableOpacity
                   style={styles.eventbutton}>
                  <Text style={styles.header, textAlign='left',
                              textAlignVertical='bottom'}> event name</Text>
                </TouchableOpacity>

                <TouchableOpacity
                   style={styles.eventbutton}>
                  <Text style={styles.header, textAlign='left',
                              textAlignVertical='bottom'}> event name</Text>
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
  },
  enterbutton: {
    backgroundColor: 'lightgrey'
  },
  eventbutton: {
    height: 200,
    width: 140,
    backgroundColor: 'lightgrey',
    marginLeft: 15,
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
  lighttext: {
    fontSize: 16,
    textAlign: 'left',
    color: 'lightgrey',
    width: '80%',
    fontSize: 18,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  nearbyvets: {
    flexDirection: 'row',
  },
  seeall: {
    flexDirection: 'row',
  }
});
