import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import LoadingScreen from '../screens/LoadingScreen';

const LoginStack = createStackNavigator({Login: LoginScreen});

export default createSwitchNavigator({
  Loading: LoadingScreen,
  Login: LoginStack,
  Main: MainTabNavigator,
},
{
  initialRouteName: 'Loading',
}
);
