import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
} from 'react-native';

export default class LoadingScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('user');
    this.props.navigation.navigate(userToken ? 'Main' : 'Login')
  };

  render() {
    return(
      <View style = {styles.container}>
        <Text>Loading Screen...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
