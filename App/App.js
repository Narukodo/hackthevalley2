import React , { Component } from 'react';
import {AppRegistry,Image,StyleSheet, Text, View, Dimensions } from 'react-native';

// import Main from 'main';

export default class App extends Component {
  render() {
    const resizeMode = 'center';
    const text = 'I am some centered text';

    return (
      <View
        style={{flex:1,flexDirection: 'row'}}
      >
        <Image 
          style={{
            resizeMode: 'cover',
            position:'absolute',left:0,right:0,top:0,bottom:0,
            height: null,
            width: null,
          }}
          source={require('./images/cBackground.png')} />
      </View>
    );
  }
}

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center'
  }
});


