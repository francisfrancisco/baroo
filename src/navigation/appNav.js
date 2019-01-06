import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, Button, StatusBar, StyleSheet, View, } from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import BottomNavOut from './bottomNavSignedOut';
import BottomNavIn from './bottomNavSignedIn';
import { Cam, Chat, CamRoll, Loading, Login, NewItem, Profile, PostFeed, Regis, BarooApp } from '../components/containers'

// AppSwitchNavigator
  // -Loading
  // -bottomTabNavInStack
  //   +postFeedStack
  //     -PostFeedComp
  //   +chatStack
  //     -ChatFeedComp
  //     -Chat
  //   +addNewItemStack
  //     -camStack
  //       -CamRollComp
  //       -CamComp 
  //   +NewItemFormStack
  //       -NewItemFormComp
  //       -bottomTabNavInStack  
  // -bottomTabOutStack
  //   -logInStack with different header, title, etc
  //   -postFeedStackOut
  //     -PostFeedComp

// const RegisterStack = createStackNavigator({
//   RegisterForm: Regis,

// })

const AppNav = createAppContainer(createSwitchNavigator(
  {
    App: BottomNavOut,
    Auth: BottomNavIn,
    Register: Regis
  },
  {
    initialRouteName: 'App',
  }
));

export default AppNav