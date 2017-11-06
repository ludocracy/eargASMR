import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import SoundIcon from './SoundIcon';

export default class SoundBoard extends Component<{}> {
  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  }
});
