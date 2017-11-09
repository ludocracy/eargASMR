import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Slider,
  Text
} from 'react-native';

export default class SoundControl extends Component<{}> {
  constructor(props) {
    super(props);

    this._handleVolumeChange = this._handleVolumeChange.bind(this);
  }

  _handleVolumeChange(value) {
    this.props.player.player.setVolume(value);
  }

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
        <Slider onValueChange={this._handleVolumeChange}
          thumbImage={require('../assets/img/ear-sliders.png')}
          value={this.props.player.player.getVolume()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
