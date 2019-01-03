import React, {Component} from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
// import { Camera } from 'react-native-camera';


class Cam extends Component {
    static navigationOptions = {
        title: 'Camera',
      };
    render() {
        return (
            <View style={styles.container}>
             <Text>CAMERA</Text>
            </View>
        )
    }

}

export default Cam

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    preview: {
     flex: 1,
     justifyContent: 'flex-end',
     alignItems: 'center',
     height: Dimensions.get('window').height,
     width: Dimensions.get('window').width
   },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      color: '#000',
      padding: 10,
      margin: 40
    }
  });