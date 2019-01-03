import React, {Component} from "react";
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {PostFeed} from '../container';
import config from '../../config'

class MainFeed extends Component {
    static navigationOptions = {
        title: 'HOMME',
        tabBarIcon: () => {
            <Image source={config.images.searchIcon} style={{width: 20, height: 20}}/>
        }
     };  
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}> 
                    <View>
                        <Image source={config.images.searchIcon} style={{height: 30, width: 30}} />
                    </View>
                    <View>
                        <Text>Baroo</Text>
                    </View>
                </View>
                <PostFeed />
            </View>                
        )
    }
}

export default MainFeed

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 100 + '%',
      height: 100 + '%'
    },
    header: {
      width: 100 + '%', 
      height: 100,
      backgroundColor: 'rgb(250,250,250)',
      borderBottomColor: 'rgb(233,233,233)',
      borderBottomWidth: StyleSheet.hairlineWidth,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 60,
      flexDirection: 'row'
    }
  });