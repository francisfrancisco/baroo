import React, {Component} from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import config from '../../config'



class Chat extends Component {
    static navigationOptions = {
        title: 'Baroo',
    };  
    render() {
        return (
            <View style={styles.container}>
            <Text>NewItemInputsHere</Text>
            <Button title='submit' onPress={() => this.props.navigation.navigate('Auth')}/>
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