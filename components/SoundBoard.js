import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import SoundButton from './SoundButton';
import { database, firebaseListToArray} from '../utils/firebase';
import jsonSoundData from '../sounds.json';

export default class SoundBoard extends Component<{}> {

  render() {
    let soundButtons = jsonSoundData.sounds.map(soundData => {
      return (
        <SoundButton key={soundData.title}
          sound={soundData} mood={this.props.mood}
          _setMoodState={this.props._setMoodState}
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
    backgroundColor: '#263D42'
  }
});
