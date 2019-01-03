import React, {Component} from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class CamRoll extends Component {
    static navigationOptions = {
        title: 'CHAT',
    };  
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}> 
                    <View>
                        <Text>Baroo</Text>
                    </View>
                </View>
            <Text>camera roll</Text>
            </View>             
        );
    }
}

export default CamRoll

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