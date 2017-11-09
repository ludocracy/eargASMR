import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

export default class Header extends Component<{}> {
  render() {
    return (
      <View style={styles.header}>
        <Image source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/105498-200.png'}}
          style={{width: 40, height: 40}} />
        <Text style={styles.title}>
          <Image source={require('../assets/img/ear.png')} style={styles.logo} />
          eargASMR
        </Text>
        <Image source={{uri: 'https://www.shareicon.net/data/2015/09/12/99907_add_512x512.png'}}
          style={{width: 50, height: 50}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: '#D33F49',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'HiraKakuProN-W3',
    fontSize: 30,
    color: '#FBFEF9',
    marginTop: 10
  },
  logo: {
    width: 50,
    height: 50,
  }
});
