import React , { Component } from 'react';
import {AppRegistry,Image,StyleSheet, Text, View, Button} from 'react-native';

// import Main from 'main';

export default class App extends Component {
  _handlePress() {
    console.log('Pressed!');
  }

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
            width: null,
            height: null,
            zIndex: 100
          }}
          source={require('./images/cBackground.png')}/>

          <View style={{
            position:'absolute',
            left:0,
            right:0,
            top:0,bottom:0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 200
          }}>
            <Button onPress={this._handlePress} title="Hello" color="#FFFFFF"/>
          </View>
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
  },
});


