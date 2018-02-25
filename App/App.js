'use strict';
import React , { Component } from 'react';
import {Image,
        StyleSheet, 
        Text, 
        View, 
        Button,
        Alert,
        NavigatorIOS} from 'react-native';
import FetchLocation from './Components/fetchLocation';

// import Main from 'main';

export default class App extends Component {
  getUserLocationHandler = () => {
    Alert.alert('Thank you for your contribution!','Every little contribution helps charities better help people who are homeless')
  }

  render() {

    return (
      <View style={{flex:1,flexDirection: 'row'}}>
        <Image
          style={styles.backgroundImage}
          source={require('./images/cBackground.png')}/>

          <View style={styles.centerButton}>
            <FetchLocation onGetLocation = {this.getUserLocationHandler} />
          </View> 
     </View>
    );
  }
}

const styles = StyleSheet.create({

  centerButton: {
    position:'absolute',
    left:0,
    right:0,
    top:0,bottom:0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 200
  },

  backgroundImage:{
    resizeMode: 'cover',
    position:'absolute',left:0,right:0,top:0,bottom:0,
    width: null,
    height: null,
    zIndex: 100
  }
});

