import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

class Main extends React.Component {
  static navigationOptions = {
    title: 'Chatter',
  };

  state = {
    name: '',
    data: [
      {key: 'Sonam Ghosh'},
      {key: 'Ghosh Sonam'},
      {key: 'Sonam Sonam'},
    ]
  };

  onPress = () =>
    this.props.navigation.navigate('Chat', { name: this.state.name });

  onChangeText = name => this.setState({ name });

  render() {
    return (
      <View>
        <Text style={styles.title}>Enter your name:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="John Cena"
          onChangeText={this.onChangeText}
          value={this.state.name}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

        <View>
          <FlatList
            style={styles.rowViewContainer}
            data={this.state.data}
            renderItem={({item}) => <Text>{item.key}</Text>}/>
        </View>
      </View>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
    fontWeight: 'bold',
  },
  nameInput: {
    height: offset * 2,

    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
  rowViewContainer: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 15,
    marginLeft: 15,
  },

});

export default Main;
