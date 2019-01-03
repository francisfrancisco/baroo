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
                <View style={styles.header}> 
                    <View>
                        <Image source={config.images.searchIcon} style={{height: 30, width: 30}} />
                    </View>
                    <View>
                        <Text>Baroo</Text>
                    </View>
                </View>
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