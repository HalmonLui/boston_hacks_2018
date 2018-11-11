import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import MapScreen from '../screens/MapScreen';
import Main from '../screens/Main';
import Chat from '../screens/Chat';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Events',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const MapStack = createStackNavigator({
  Map: MapScreen,
});

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused,tintColor }) => (
     focused ? <Image
         source={require('../images/map-selected.png')}

       />
       :
       <Image
         source={require('../images/map.png')}

       />
  ),
};

const MainStack = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});

MainStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused,tintColor }) => (
     focused ? <Image
         source={require('../images/chat-selected.png')}

       />
       :
       <Image
         source={require('../images/chat.png')}

       />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  MapStack,
  MainStack,
});
