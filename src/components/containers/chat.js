import React, {Component} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import config from '../../config'

class Chat extends Component {
    static navigationOptions = {
        title: 'CHAT',
    };  
    render() {
        return (
            <View style={styles.container}>
            <Text>Chat</Text>
            </View>             
        );
    }
}

export default Chat

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 100 + '%',
      height: 100 + '%',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });