import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import config from '../../config';

class Post extends Component{

  state = {
    screenWidth: Dimensions.get('window').width,
  }

  GoToItem(){
    alert("going")
  }

  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={.9} onPress={() => {this.GoToItem()}}>
          <Image source={config.images.stockPost} style={{width: 150, height: 300, flexDirection: 'row'}} />
        </TouchableOpacity>
        {/* <View>
          <Text>GOLF CLUB DETAILS maybe modal?</Text>
        </View> */}
      </View>
    )
  }
}

export default Post

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100 + '%',
    height: 100 + '%',
    flexDirection: 'row'
  }
});
