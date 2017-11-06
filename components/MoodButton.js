import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

export default class MoodBar extends Component<{}> {
  render() {
    return (
      <View style={this.props.isSelected ? styles.selectedMoodButton : styles.unselectedMoodButton}>
        <Button
          onPress = {(e) => this.props.handlePressMood(e, this.props.id)}
          title={this.props.title}
        />
      </View>
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
    backgroundColor: 'blue',
    height: 100,
    width: 100,
    marginRight: 10,
    marginLeft: 10
  }
});
