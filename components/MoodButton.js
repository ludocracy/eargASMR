import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

export default class MoodBar extends Component<{}> {
  render() {
    let styling = this.props.isPlaying
      ? styles.selectedMoodButton
      : styles.unselectedMoodButton;

    return (
      <TouchableOpacity style={this.props.isSelected ? styles.selectedMoodButton: styles.unselectedMoodButton}>
        <Image
          style={{height: 100, width: 100}}
          onPress = {(e) => this.props.handlePressMood(e, this.props.mood)}
          source={require('../images/icons/add-mood.png')}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  selectedMoodButton: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
    marginRight: 10,
    marginLeft: 10
  },
  unselectedMoodButton: {
    height: 100,
    width: 100,
    marginRight: 10,
    marginLeft: 10
  }
});
