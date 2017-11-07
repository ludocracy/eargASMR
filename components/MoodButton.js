import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

export default class MoodBar extends Component<{}> {
  render() {
    let styling = this.props.isSelected
      ? styles.selectedMoodButton
      : styles.unselectedMoodButton;
      
    return (
      <View style={styling}>
        <Button
          style={{height: 100, width: 100}}
          onPress = {e => this.props._handlePressMood(e, this.props.mood)}
          title={this.props.mood.title}
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
