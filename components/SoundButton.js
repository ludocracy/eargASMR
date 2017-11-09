import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import Sound from 'react-native-sound';
import { database } from '../utils/firebase';
import images from '@assets/images';

export default class SoundButton extends Component<{}> {
  constructor(props){
    super(props);

    this.state = {
      isPlaying: this.props.isPlaying
    };

    this._onPress = this._onPress.bind(this);
  }

  componentWillMount() {
    this.player = new Sound(this.props.sound.soundUrl);
  }

  // TODO handle errors on loading sound player
  _onError() {

  }

  // TODO check if mood is active; if not, set it to be active
  _onPress(e) {
    if(this.state.isPlaying) {
      let newSounds = this.props.mood.sounds
        .filter(sound => sound && sound.title !== this.props.sound.title);
      database.ref(`moods/${this.props.mood.id}`).set({
        sounds: newSounds
      });

      this.player.pause();
    } else {
      let soundArray = this.props.mood.sounds;
      if (soundArray === undefined) {
        soundArray = []
      }
      database.ref(`moods/${this.props.mood.id}`).set({
        sounds: soundArray.concat(this.props.sound)
      });

      this.player.play();
      this.player.setNumberOfLoops(-1);

    }

    this.setState ({
      isPlaying: !this.state.isPlaying
    });
  }
// TODO use this.props.sound.title and this.props.sound.iconUrl
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
    borderWidth: 3,
    borderColor: '#62B6CB',
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8CC9D9"
  }
});
