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
      isPlaying: this.props.player.isPlaying
    }

    this._onPress = this._onPress.bind(this);
  }

  _onPress(e) {
    let soundArray = this.props.mood.sounds || [];
    if(this.props.player.isPlaying) {
      // filter this mood's sounds to not include the one we just pressed
      let newSounds = soundArray
        .filter(sound => sound && sound.title !== this.props.sound.title);
      database.ref(`moods/${this.props.mood.id}`).update({
        sounds: newSounds
      }).then(() => {
        this.setState({
          isPlaying: false
        });
        this.props.player.pause();
      });
    } else {
      database.ref(`moods/${this.props.mood.id}`).update({
        sounds: soundArray.concat(this.props.sound)
      }).then(() => {
        this.setState({
          isPlaying: true
        });
        this.props.player.play();
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
    borderWidth: 3,
    borderColor: '#62B6CB',
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8CC9D9"
  }
});
