import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import SoundButton from './SoundButton';
import { database, firebaseListToArray} from '../utils/firebase';
import jsonSoundData from '../sounds.json';

export default class SoundBoard extends Component<{}> {
  _isInMood(sound) {
    return this.props.mood.sounds.find(s => s.title === sound.title) !== undefined
  }

  render() {
    let soundButtons = jsonSoundData.sounds.map(soundData => {
      let isPlaying = this.props.isPlaying ? this._isInMood(soundData) : false;
      return (
        <SoundButton key={soundData.title} isPlaying={isPlaying} sound={soundData} mood={this.props.mood} />
      );
    });
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
