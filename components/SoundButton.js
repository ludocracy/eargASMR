import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import { database } from '../utils/firebase';
import images from '@assets/images';

export default class SoundButton extends Component<{}> {
  constructor(props){
    super(props);

    this.state = {
      isSelected: false
    }

    this._addSoundToMood = this._addSoundToMood.bind(this);
    this._removeSoundFromMood = this._removeSoundFromMood.bind(this);
    this._onPress = this._onPress.bind(this);
  }

  componentDidMount(){
    // grabbing reference to currently selected mood
    this.ref = database.ref(`moods/${this.props.mood.id}`);

    // sets this sound button to be selected based on whether current mood includes it
    this.ref.on(`value`, mood => {
      this.setState({
        isSelected: this._isInMood(mood.val())
      });
    });
  }

  componentWillUnmount() {
    this.ref.off();
  }

  // checks whether given mood includes this sound
  _isInMood(mood) {
    return mood.sounds && mood.sounds[this.props.sound.title];
  }

  _onPress() {
    let player = this.props.player;
    if(this.state.isSelected) { // sound is currently selected
      // deselect sound, remove from DB and pause it
      this._removeSoundFromMood();
      player.pause();
    } else { // sound is currently NOT selected
      // select sound and add to DB
      this._addSoundToMood();
      // make whole mood play
      this.props._setMoodState('play', this.props.sound);
    }
  }

  _addSoundToMood() {
    let soundsObj = this.props.mood.sounds || {};
    soundsObj[this.props.sound.title] = this.props.sound;
    this.ref.update({
      sounds: soundsObj
    }).then(() => {
      this.setState({
        isSelected: true
      });
    });
  }

  _removeSoundFromMood() {
    let soundsObj = this.props.mood.sounds || {};
    delete soundsObj[this.props.sound.title];
    this.ref.update({
      sounds: soundsObj
    }).then(() => {
      this.setState({
        isSelected: false
      });
    });
  }

  render() {
    return (
        <TouchableOpacity style={styles.soundButton} onPress={this._onPress}>
        <Image
          style={this.state.isSelected ? styles.selected : styles.unselected}
          source={images[this.props.sound.iconKey]}
        />
        <Text style={styles.iconTitles}>{this.props.sound.title}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  soundButton: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  unselected: {
    height: 80,
    width: 80,
  },
  selected: {
    borderRadius: 6,
    borderWidth: 3,
    borderColor: '#62B6CB',
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8CC9D9"
  },
  iconTitles: {
    color: '#FBFEF9',
    fontWeight: 'bold'
  }
});
