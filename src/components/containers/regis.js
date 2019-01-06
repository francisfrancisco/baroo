import React, {Component} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

class Regis extends Component {

    // state = {
    //     emailInput: '',
    //     pwordInput: ''
    // }

    register = () => {
        //send credentials 
        //if successful navigate to mainfeed
        //else error msg
    }
    render() {
        return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Register Form</Text>
            <TextInput style={styles.inputs} placeholder='first' />
            <TextInput style={styles.inputs} placeholder='last' />
            <TextInput style={styles.inputs} placeholder='username' />
            <TextInput style={styles.inputs} placeholder='email' />
            <TextInput style={styles.inputs} secureTextEntry placeholder='pword'/>
            <Button title='Register' onPress={() => this.props.navigation.navigate('App')} />
        </View>
        );
    }
}

export default Regis

const styles = StyleSheet.create({
    inputs: {
        width: 100 + '%',
        height: 60,
        marginVertical: 10,
        backgroundColor: 'rgb(250,250,250)',
        borderBottomColor: 'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
  });