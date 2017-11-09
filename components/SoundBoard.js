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
    if(this.props.mood.sounds) {
      return this.props.mood.sounds.find(s => s.title === sound.title);
    } else {
      return false;
    }
  }

  render() {
    let soundButtons = jsonSoundData.sounds.map(soundData => {
      return (
        <SoundButton key={soundData.title} isPlaying={this._isInMood(soundData)}
          sound={soundData} mood={this.props.mood}
          player={this.props.players[soundData.title]} />
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
  soundBoard: {
    justifyContent: 'space-around',
    alignContent: 'space-around',
    flexDirection: 'row',
    flex: 10,
    flexWrap: 'wrap',
    backgroundColor: '#80D3D8'
  }
});
