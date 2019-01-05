import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BottomNavIn from './src/navigation/bottomNavSignedIn';
import BottomNavOut from './src/navigation/bottomNavSignedOut';
import AppNav from './src/navigation/appNav';

class App extends Component {

  render() {
    return (
      <AppNav />
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});