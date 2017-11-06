import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import SoundButton from './SoundButton';

export default class SoundBoard extends Component<{}> {
  render() {
    let soundData = [0,0,0,0,0,0,0,0,0,0,0,0];
    let soundButtons = soundData.map((e, index) => {
      return (
        <SoundButton key={index} />
      )
    })
    return (
      <View style={styles.soundBoard}>
        {soundButtons}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
  soundBoard: {
    justifyContent: 'space-around',
    alignContent: 'space-around',
    flexDirection: 'row',
    flex: 10,
    flexWrap: 'wrap',
    backgroundColor: 'skyblue'}
});
