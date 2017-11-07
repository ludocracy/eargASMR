import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import SoundButton from './SoundButton';
import { database, firebaseListToArray} from '../utils/firebase';

export default class SoundBoard extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      sounds: []
    }
  }

  componentDidMount() {
    this.ref = database.ref('sounds');
    this.ref.on('value', snapshot => {
      this.setState({
        sounds: firebaseListToArray(snapshot.val())
      });
    });
  }

  componentWillUnmount() {
    this.ref.off();
  }

  _isInMood(sound) {
    return this.props.mood.sounds.find(s => s.id === sound.id) !== undefined
  }

  render() {
    let soundButtons = this.state.sounds.map(soundData => {
      let isPlaying = this.props.isPlaying ? this._isInMood(soundData) : false;
      return (
        <SoundButton key={soundData.id} isPlaying={isPlaying} sound={soundData} mood={this.props.mood} />
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
