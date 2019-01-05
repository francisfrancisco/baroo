import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { PostFeed, Login } from '../components/containers';


const Tabs = createBottomTabNavigator({
    Home: PostFeed,
    Chat: Login,
    NewItem: Login,
    Register: Login
},{
  tabBarOptions: {
    activeBackgroundColor: 'darkgreen'
  }
})

const BottomNavOut = createAppContainer(Tabs);

export default BottomNavOut