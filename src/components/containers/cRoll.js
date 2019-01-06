import React, { Component } from 'react'
import { View, TouchableHighlight, Modal, StyleSheet, Button, CameraRoll, Image, Dimensions, ScrollView } from 'react-native'

const { width } = Dimensions.get('window')

class CamRoll extends Component {

  state = {
    modalVisible: false,
    photos: [],
    index: null
  }

  setIndex = (index) => {
    if (index === this.state.index) {
      index = null
    }
    this.setState({ index })
  }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
    .then(r => this.setState({ photos: r.edges }))
  }

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  morePhotos = () => {
      alert('moar')
  }

  render() {
    console.log('state :', this.state)
    return (
      <View style={styles.container}>
        <Button
          title='View Photos'
          onPress={() => { this.toggleModal(); this.getPhotos() }}
        />
        <Button
          title='Take Photo'
          onPress={() => this.props.navigation.navigate('Camera')}
        />
        {/* NOT FUNCTIONING CHANGE NAV */}
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => console.log('closed')}
        >
          <View style={styles.modalContainer}>
            <Button
              title='Close'
              onPress={this.toggleModal}
            />
            <ScrollView
              contentContainerStyle={styles.scrollView}>
              {
                this.state.photos.map((p, i) => {
                  return (
                    <TouchableHighlight
                      style={{opacity: i === this.state.index ? 0.5 : 1}}
                      key={i}
                      underlayColor='transparent'
                      onPress={() => this.setIndex(i)}
                    >
                      <Image
                        style={{
                          width: width/3,
                          height: width/3
                        }}
                        source={{uri: p.node.image.uri}}
                      />
                    </TouchableHighlight>
                  )
                })
              }
            </ScrollView>
            <Button title='moar' onPress={this.morePhotos}/>
          </View>
        </Modal>
      </View>
    )
  }
}

export default CamRoll

const styles = StyleSheet.create({
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
    },    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        paddingVertical: 30,
        marginTop: 20,
        flex: 1
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
})
