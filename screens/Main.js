import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import { ListItem } from 'react-native-elements';
class Main extends React.Component {
  static navigationOptions = {
    title: 'Chat',
  };

  state = {
    name: '',
    data: [
      {key: 'Sonam Ghosh', uri: 'https://media.licdn.com/dms/image/C5603AQG5ONUJiEDStg/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=RvOqZTml4cyXyuBazzgMYqooqhmy1w24vssc4LpeW6o'},
      {key: 'Halmon Lui', uri: 'https://media.licdn.com/dms/image/C5603AQHv9IK9Ts0dFA/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=ULAiepVc0abj51GEPA7Feyv0YOB64s5Tk5xAuI2QyXQ'},
      {key: 'Nicole Chen', uri: 'https://media.licdn.com/dms/image/C5603AQF261MyxCC3Bw/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=qc0IoafKxPykJ2Blob2kEFqTjSULEE0K1Ofhb1uNh9g'},
      {key: 'John Smith', uri: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Memorial_Day_2013_%E2%80%93_San_Francisco_National_Cemetery_%E2%80%93_06.jpg'},
      {key: 'Brian He', uri: 'https://media.licdn.com/dms/image/C5603AQF6QzTiWhBH7A/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=ppSNP9SD3Mb-YTRggATcvKgo_k0LfnMStsdvGuoHbxo'},
      {key: 'Sonam Sonam', uri: 'https://media.licdn.com/dms/image/C5603AQG5ONUJiEDStg/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=RvOqZTml4cyXyuBazzgMYqooqhmy1w24vssc4LpeW6o'},
      {key: 'Sonam Ghosh', uri: 'https://media.licdn.com/dms/image/C5603AQHv9IK9Ts0dFA/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=ULAiepVc0abj51GEPA7Feyv0YOB64s5Tk5xAuI2QyXQ'},
      {key: 'Ghosh Sonam', uri: 'https://media.licdn.com/dms/image/C5603AQF261MyxCC3Bw/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=qc0IoafKxPykJ2Blob2kEFqTjSULEE0K1Ofhb1uNh9g'},
      {key: 'Sonam Sonam', uri: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Memorial_Day_2013_%E2%80%93_San_Francisco_National_Cemetery_%E2%80%93_06.jpg'},
      {key: 'Sonam Ghosh', uri: 'https://media.licdn.com/dms/image/C5603AQF6QzTiWhBH7A/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=ppSNP9SD3Mb-YTRggATcvKgo_k0LfnMStsdvGuoHbxo'},
      {key: 'Ghosh Sonam', uri: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Memorial_Day_2013_%E2%80%93_San_Francisco_National_Cemetery_%E2%80%93_06.jpg'},
      {key: 'Sonam Sonam', uri: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Memorial_Day_2013_%E2%80%93_San_Francisco_National_Cemetery_%E2%80%93_06.jpg'},
      {key: 'Sonam Ghosh', uri: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Memorial_Day_2013_%E2%80%93_San_Francisco_National_Cemetery_%E2%80%93_06.jpg'},
      {key: 'Ghosh Sonam', uri: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Memorial_Day_2013_%E2%80%93_San_Francisco_National_Cemetery_%E2%80%93_06.jpg'},
      {key: 'Sonam Sonam', uri: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Memorial_Day_2013_%E2%80%93_San_Francisco_National_Cemetery_%E2%80%93_06.jpg'},
      {key: 'Sonam Ghosh', uri: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Memorial_Day_2013_%E2%80%93_San_Francisco_National_Cemetery_%E2%80%93_06.jpg'},
      {key: 'Ghosh Sonam', uri: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Memorial_Day_2013_%E2%80%93_San_Francisco_National_Cemetery_%E2%80%93_06.jpg'},
      {key: 'Sonam Sonam', uri: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Memorial_Day_2013_%E2%80%93_San_Francisco_National_Cemetery_%E2%80%93_06.jpg'},
    ]
  };

  onPress = () =>
    this.props.navigation.navigate('Chat', { name: this.state.name });

  onChangeText = name => this.setState({ name });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter recipient:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="John Cena"
          onChangeText={this.onChangeText}
          value={this.state.name}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

        <ScrollView>
          <FlatList
            style={styles.rowViewContainer}
            data={this.state.data}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <ListItem
                  roundAvatar
                  title={item.key}
                  avatar={{ uri: item.uri}}
                />
              </TouchableOpacity>
            )} />
        </ScrollView>
      </View>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
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
    fontSize: 20,
    textAlign: 'right',
    marginRight: 5,
  },
  rowViewContainer: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 15,
    marginLeft: 15,
  },

});

export default Main;
