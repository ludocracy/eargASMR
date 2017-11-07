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
    let icon = [
      '../images/icons/bug.png',
      '../images/icons/beach.png',
      '../images/icons/bell.png',
      '../images/icons/bird.png',
      '../images/icons/bonfire.png',
      '../images/icons/cicada.png',
      '../images/icons/waves.png',
      '../images/icons/wind-rain.png'
    ]
    let soundButtons = soundData.map((e, index) => {
      return (
        <SoundButton source={require(icon)} key={index} />
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
    backgroundColor: '#80D3D8'
  }
});
