import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Login, PostFeed, Regis } from '../components/containers';
import BottomNavIn from './bottomNavSignedIn';


  // -bottomTabOutStack
  //   -logInStack with different header, title, etc
  //   -postFeedStackOut
  //     -PostFeedComp

// const ChatLoginStack = createStackNavigator({
//   ChatLogin: ChatLogin,
//   IsLoggedIn: PostFeed,
//   Register: Regis
// })
// const NewItemLoginStack = createStackNavigator({
//   NewItemLogin: NewItemLogin,
//   IsLoggedIn: PostFeed,
//   Register: Regis
// })
// const ProfileLoginStack = createStackNavigator({
//   ProfileLogin: ProfileLogin,
//   IsLoggedIn: PostFeed,
//   Register: Regis
// })
const LoginStack = createStackNavigator({
  Login: Login,
  Register: Regis
})

const TabsOut = createBottomTabNavigator({
    Home: PostFeed,
    Chat: LoginStack,
    NewItem: LoginStack,
    Profile: LoginStack
},{
  tabBarOptions: {
    activeBackgroundColor: 'darkgreen'
  }
})

const BottomNavOut = createAppContainer(TabsOut);

export default BottomNavOut