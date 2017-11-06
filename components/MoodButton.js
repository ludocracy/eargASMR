import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

export default class MoodBar extends Component<{}> {
  render() {
    return (
      <View style={styles.moodButton}>
        <Button
          title={this.props.title}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  moodButton: {
    backgroundColor: 'blue',
    height: 100,
    width: 100
  }
});
