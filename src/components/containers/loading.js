import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

class Loading extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>BAROO IS LOADING</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10
  }
})

export default Loading