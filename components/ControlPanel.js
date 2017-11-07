import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
import SoundControl from './SoundControl';
import Timer from './Timer';


export default class ControlPanel extends Component<{}> {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#DDBEA2'}}>
        <Button
        onPress ={() => {}}
        title='Save Mood'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
