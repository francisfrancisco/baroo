import React, {Component} from 'react';
import { MainFeed, Login, Cam, NewItem, Regis, Profile, Chat, ItemList } from './components/screens';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
// import config from './config';

const Tabs = createBottomTabNavigator({
    Login: Login,
    Home: MainFeed,
    Chat: Chat,
    NewItem: NewItem
},{
  tabBarOptions: {
    activeBackgroundColor: 'darkgreen'
  }
})

// const introStack = createStackNavigator({
//   Login: Login,
//   Register: Regis
// })

const AppContainer = createAppContainer(Tabs);

class BarooApp extends Component {
  render() {
    return (
      <AppContainer />
      // <Profile />
    )
  }
}

export default BarooApp
