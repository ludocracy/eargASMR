import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import SoundControl from './SoundControl';
import Timer from './Timer';


export default class ControlPanel extends Component<{}> {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'steelblue'}} />
    );
  }
}

const styles = StyleSheet.create({
});
