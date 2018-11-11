import React from 'react';
import { View, ScrollView, StyleSheet, Text, AppRegistry, Image, TouchableOpacity } from 'react-native';
{/*import { SearchBar } from 'react-native-elements'*/}

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>

        {/*put search bar here
        <SearchBar
          onChangeText={someMethod}
          onClear={someMethod}
          placeholder='Type Here...' />

        <SearchBar
        clearIcon={{ color: 'red' }}
        searchIcon={false} // You could have passed `null` too
        onChangeText={someMethod}
        onClear={someMethod}
        placeholder='Type Here...' />*/}

        <Text style={styles.header}>Search</Text>

        <Text style={styles.header}>Invites</Text>

        <Text style={styles.header}>Popular Events Near You</Text>

        <View>
            <TouchableOpacity
               style={styles.eventbutton}>
              <Text style={styles.header, textAlign='left',
                          textAlignVertical='bottom'}> event name</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.header}>Veterans Nearby</Text>
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
  },
  eventbutton: {
    height: 125,
    width: 90,
    backgroundColor: 'lightgrey',
  }
});
