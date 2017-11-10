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
        <Text style={styles.title}>
          <Image source={require('../assets/img/ear.png')} style={styles.logo} />
          eargASMR
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1.5,
    backgroundColor: '#D33F49',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'HiraKakuProN-W3',
    fontSize: 30,
    color: '#FBFEF9',
    paddingBottom: 10
  },
  logo: {
    width: 50,
    height: 50,
  }
});
