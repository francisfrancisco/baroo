import React, {Component} from "react";
import { View, Text, StyleSheet, Image, CameraRoll, ScrollView, Button } from "react-native";

class CamRoll extends Component {

    state = {
        photos: []
    }

    _handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
          })
          .then(r => {
            this.setState({ photos: r.edges });
          })
          .catch((err) => {
             //Error Loading Images
          });
        };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}> 
                    <View>
                        <Text>Baroo</Text>
                    </View>
                </View>
                <Button title="Load Images" onPress={this._handleButtonPress} />
                <ScrollView>
                {this.state.photos.map((p, i) => {
                return (
                    <Image
                    key={i}
                    style={{
                        width: 300,
                        height: 100,
                    }}
                    source={{ uri: p.node.image.uri }}
                    />
                );
                })}
                </ScrollView>
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