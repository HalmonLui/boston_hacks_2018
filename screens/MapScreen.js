import React from 'react';
import { View, ScrollView, StyleSheet, Text, AppRegistry, Image, TouchableOpacity, TextInput, ImageBackground} from 'react-native';
import { SearchBar } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


export default class MapScreen extends React.Component {
  constructor(props){
      super(props)

      this.state = {
        region: {
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0,
          longitudeDelta: 0,
        },
        markers: [{
          title: 'Nom',
          description: 'hello',
          coordinates: {
            latitude: 42.2231144,
            longitude: -71.0069908
          },
        }]
      };
    }

    static navigationOptions = {
      header: null,
    };

    componentWillMount() {
     navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           region: {
             latitude: position.coords.latitude,
             longitude: position.coords.longitude,
             latitudeDelta: 0.01,
             longitudeDelta: 0.0011
           },
           markers: [{
             coordinates: {
               latitude: position.coords.latitude,
               longitude: position.coords.longitude,
             },
           }]
         });
       },
       (error) => alert(JSON.stringify(error)),
     );
   }

   onRegionChange(region) {
     this.setState({ region: region });
   }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Memorial_Day_2013_%E2%80%93_San_Francisco_National_Cemetery_%E2%80%93_06.jpg'
    };
    return (
      <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={this.state.region}
            onRegionChange={this.onRegionChange.bind(this)}
            showsUserLocation={false}
            followsUserLocation={true}
            showsMyLocationButton={false}
            showsCompass={false}
            zoomEnabled={false}
            showsScale={false}
            showsTraffic={false}
            showsIndoors={true}
            showsBuildings={true}
            zoomControlEnabled={false}
            minZoomLevel={18}
            maxZoomLevel={19}
            rotateEnabled={false}
            scrollEnabled={false}
            pitchEnabled={false}
            toolbarEnabled={false}
            moveOnMarkerPress={false}
          >
          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
            />

          ))}
          </MapView>
        <ScrollView style={styles.eventsContainer}>
          <View style={styles.eventSplit}>
          <TouchableOpacity style={styles.eventTouch}>
            <ImageBackground style={styles.eventImage} imageStyle={{ borderRadius: 5 }} source={require('../images/kayak.jpg')}>
                <Text style={styles.eventheader}> Sonam</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.eventTouch}>
            <ImageBackground style={styles.eventImage} imageStyle={{ borderRadius: 5 }} source={require('../images/hiking.jpg')}>
              <Text style={styles.eventheader}> Brian</Text>
            </ImageBackground>
          </TouchableOpacity>
          </View>
          <View style={styles.eventSplit}>
          <TouchableOpacity style={styles.eventTouch}>
            <ImageBackground style={styles.eventImage} imageStyle={{ borderRadius: 5 }} source={require('../images/baseball.jpg')}>
              <Text style={styles.eventheader}> Halmon</Text>
            </ImageBackground>
          </TouchableOpacity>
            <TouchableOpacity style={styles.eventTouch}>
            <ImageBackground style={styles.eventImage} imageStyle={{ borderRadius: 5 }} source={require('../images/bowling.jpg')}>
              <Text style={styles.eventheader}> Nicole</Text>
            </ImageBackground>
          </TouchableOpacity>
          </View>
          <View style={styles.eventSplit}>
          <TouchableOpacity style={styles.eventTouch}>
            <ImageBackground style={styles.eventImage} imageStyle={{ borderRadius: 5 }} source={require('../images/hiking.jpg')}>
              <Text style={styles.eventheader}> Mariah</Text>
            </ImageBackground>
          </TouchableOpacity>
            <TouchableOpacity style={styles.eventTouch}>
            <ImageBackground style={styles.eventImage} imageStyle={{ borderRadius: 5 }} source={require('../images/kayak.jpg')}>
              <Text style={styles.eventheader}> Kevin</Text>
            </ImageBackground>
          </TouchableOpacity>
          </View>
          <View style={styles.eventSplit}>
          <TouchableOpacity style={styles.eventTouch}>
            <ImageBackground style={styles.eventImage} imageStyle={{ borderRadius: 5 }} source={require('../images/bowling.jpg')}>
              <Text style={styles.eventheader}> Wollo</Text>
            </ImageBackground>
          </TouchableOpacity>
            <TouchableOpacity style={styles.eventTouch}>
            <ImageBackground style={styles.eventImage} imageStyle={{ borderRadius: 5 }} source={require('../images/baseball.jpg')}>
              <Text style={styles.eventheader}> Dan</Text>
            </ImageBackground>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     bottom: '40%',
 },
 eventheader: {
   fontWeight: 'bold',
   fontSize: 20,
   padding: 10,
   paddingTop: 75,
   margin: 5,
   textAlign: 'left',
   textAlignVertical: 'bottom',
   color: '#fff',
 },
 eventTouch: {
   flex: 1,
   width: '100%',
   margin: 5,
 },
 eventImage: {
   flex: 1,
   width: '100%',
 },
 eventsContainer: {
   position: 'absolute',
   bottom: 0,
   left: 0,
   right: 0,
   top: '60%',
 },
 eventSplit: {
   flex: 1,
   display: 'flex',
   flexDirection: 'row',
 },
});
