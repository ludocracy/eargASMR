import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import SoundIcon from './SoundIcon';

export default class SoundBoard extends Component<{}> {
  render() {
    let soundData = [0,0,0,0,0,0,0,0,0,0,0,0];
    let soundIcons = soundData.map((e, index) => {
      return (
        <SoundIcon key={index} />
      )
    })
    return (
      <View style={styles.soundBoard}>
        {soundIcons}
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
    justifyContent: 'space-between',
    alignContent: 'space-around',
    flexDirection: 'row',
    flex: 10,
    flexWrap: 'wrap',
    backgroundColor: 'skyblue'}
});
