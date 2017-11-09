import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import { database } from '../utils/firebase';
import images from '@assets/images';

export default class SoundButton extends Component<{}> {
  constructor(props){
    super(props);

    this.state = {
      isPlaying: this.props.isPlaying
    }
    this._onPress = this._onPress.bind(this);
  }

  isPlaying() {
  	return new Promise((resolve, reject) => {
  		this.props.player.getCurrentTime((seconds, isPlaying) => {
  			resolve(isPlaying);
  		});
  	});
  }

  _onPress(e) {
    if(this.isPlaying() && this.props.mood.sounds) {
      let newSounds = this.props.mood.sounds
        .filter(sound => sound && sound.title !== this.props.sound.title);
      database.ref(`moods/${this.props.mood.id}`).update({
        sounds: newSounds
      });

      this.props.player.pause();

      this.setState({
        isPlaying: false
      });
    } else {
      let soundArray = this.props.mood.sounds;
      if (soundArray === undefined) {
        soundArray = []
      }
      database.ref(`moods/${this.props.mood.id}`).update({
        sounds: soundArray.concat(this.props.sound)
      });


      this.props.player.play();
      this.props.player.setNumberOfLoops(-1);

      this.setState({
        isPlaying: true
      });
    }
  }

  render() {
    return (
        <TouchableOpacity style={styles.soundButton} onPress={this._onPress}>
        <Image
          style={this.state.isPlaying ? styles.selected : styles.soundIcon}
          source={images[this.props.sound.iconKey]}
        />
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
  soundIcon: {
    height: 80,
    width: 80,
  },
  selected: {
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#0092B4',
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  }
});
