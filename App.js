/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <View style={{flex: 1, backgroundColor: 'powderblue', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Image source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/105498-200.png'}}
            style={{width: 40, height: 40}} />
          <Text style={{ fontFamily: 'HelveticaNeue-CondensedBold', fontSize: 30 }}>
            eargASMR
          </Text>
          <Image source={{uri: 'https://www.shareicon.net/data/2015/09/12/99907_add_512x512.png'}}
            style={{width: 50, height: 50}} />
        </View>
        <View style={{flex: 10, backgroundColor: 'skyblue'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 40, paddingBottom: 30}}>
            <View style={styles.icon} />
            <View style={styles.icon} />
            <View style={styles.icon} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingBottom: 30}}>
            <View style={styles.icon} />
            <View style={styles.icon} />
            <View style={styles.icon} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingBottom: 30}}>
            <View style={styles.icon} />
            <View style={styles.icon} />
            <View style={styles.icon} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingBottom: 30}}>
            <View style={styles.icon} />
            <View style={styles.icon} />
            <View style={styles.icon} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingBottom: 10}}>
            <View style={styles.icon} />
            <View style={styles.icon} />
            <View style={styles.icon} />
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
