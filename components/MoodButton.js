import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

export default class MoodBar extends Component<{}> {
  render() {
    let styling = this.props.isSelected
      ? styles.selectedMoodButton
      : styles.unselectedMoodButton;

    return (
      <TouchableOpacity style={styling} onPress = {(e) => this.props._handlePressMood(e, this.props.mood)}>
        <View style={styles.moodContainer}>
          <Image
            style={{height: 100, width: 100}}
            source={require('../assets/img/headphones.png')}
          />
          <Text style={styles.moodNames}>{this.props.mood.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  selectedMoodButton: {
    height: 100,
    width: 100,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: '#62B6CB',
    flexDirection: 'row'
  },
  unselectedMoodButton: {
    height: 100,
    width: 100,
    marginRight: 10,
    marginLeft: 10,
  },
  moodContainer: {
    alignItems: 'center'
  },
  moodNames: {
    fontFamily: 'HiraKakuProN-W3',
    color: '#FBFEF9'
  }
});
