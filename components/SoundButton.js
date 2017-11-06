import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
import Sound from 'react-native-sound'

export default class SoundButton extends Component<{}> {
  constructor(props){
    super(props);

    this.state = {
      isPlaying: false
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
      <View style={styles.soundButton}>
        <Button
          onPress ={this._onPress}
          title='Sound Button'
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  soundButton: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  }
});
