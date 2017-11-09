import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import MoodButton from './MoodButton';

export default class MoodBar extends Component<{}> {
  render() {
    let moodButtons = this.props.moods.map(moodObject => {
      return(
        <MoodButton
        isPlaying={this.props.mood && this.props.mood.id === moodObject.id}
        key={moodObject.id}
        _handlePressMood={this.props._handlePressMood}
        mood={moodObject}
        />
      );
    });

    return (
      <ScrollView horizontal={true} style={styles.moodBarScroll}>
        <View style={styles.moodBar}>
          {moodButtons}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  moodBar: {
    alignItems: 'center',
    alignContent: 'space-around',
    flexDirection: 'row',
  },
  moodBarScroll: {
    backgroundColor: '#D33F49'
  }
});
