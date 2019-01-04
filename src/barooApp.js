import React, {Component} from 'react';
import { MainFeed, Login, Cam, NewItem, Regis, Profile, Chat, CamRoll } from './components/screens';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
// import config from './config';

const Tabs = createBottomTabNavigator({
    Home: MainFeed,
    Profile,Profile,
    Chat: Chat,
    NewItem: NewItem
},{
  tabBarOptions: {
    activeBackgroundColor: 'darkgreen'
  }
})

const BottomTabsContainer = createAppContainer(Tabs);

const LoginStack = createStackNavigator({
  Login: Login,
  Register: Regis,
  // only if login successful
  Feed: MainFeed
})

const LoginContainer = createAppContainer(LoginStack);

const CamStack = createStackNavigator(
  {
    Roll: CamRoll,
    Camera: Cam
  },
  {
    initialRouteName: "Roll"
  }
);

const CameraContainer = createAppContainer(CamStack);

class BarooApp extends Component {
  render() {
    return (
      <BottomTabsContainer />
    )
  }
}

export default BarooApp
