import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

export default class SoundIcon extends Component<{}> {
  render() {
    return (
      <View style={styles.soundButton}>
        <Button
          onPress ={() => {}}
          title='Sound Icon'
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
