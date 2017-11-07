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

export default class SoundButton extends Component<{}> {
  constructor(props){
    super(props);

    this.state = {
      isPlaying: this.props.isPlaying
    };

    this._onPress = this._onPress.bind(this);
  }

  componentWillMount() {
    this.player = new Sound(this.props.sound.soundUrl, this._onError);
  }

  // TODO handle errors on loading sound player
  _onError() {

  }

  // TODO check if mood is active; if not, set it to be active
  _onPress(e) {
    if(this.state.isPlaying) {
      let newSounds = this.props.mood.sounds
        .filter(sound => sound.title !== this.props.sound.title);
      database.ref(`moods/${this.props.mood.id}`).set({
        sounds: newSounds
      });

      this.player.pause();
    } else {
      database.ref(`moods/${this.props.mood.id}`).set({
        sounds: this.props.mood.sounds.concat(this.props.sound)
      });

      this.player.play();
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
          style={styles.soundIcon}
          source={this.props.icon}
        />
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  soundButton: {
    height: 90,
    width: 110,
  },
  soundIcon: {
    width: 110,
    height: 90,
  }

});
