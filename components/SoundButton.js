import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import Sound from 'react-native-sound';

export default class SoundButton extends Component<{}> {
  constructor(props){
    super(props);

    this.state = {
      isPlaying: false,
      icon: []
    }

    this.sound = new Sound('https://www.memoclic.com/medias/sons-wav/2/705.wav');

    this._onPress = this._onPress.bind(this);
  }

  _onPress() {

    if(this.state.isPlaying) {
      this.sound.pause()
    } else {
      this.sound.play();
    }

    this.setState ({
      isPlaying: !this.state.isPlaying
    });
  }

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
