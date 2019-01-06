import React, {Component} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

class Login extends Component {

    static navigationOptions = {
        title: 'Baroo',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Login</Text>
            <TextInput style={styles.inputs} placeholder='email' />
            <TextInput style={styles.inputs} secureTextEntry placeholder='pword'/>
                {/* if successful goes to mainFeed */}
            <Button title='Login' onPress={() => this.props.navigation.navigate('Auth')} />
            <Button title='Signup' onPress={() => this.props.navigation.navigate('Register')} />
        </View>
        );
    }
}

export default Login

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