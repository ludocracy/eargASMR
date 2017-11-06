import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import MoodButton from './MoodButton';

export default class MoodBar extends Component<{}> {
  render() {
    let moodData = ['mood1', 'mood2', 'mood3']
    let moodButtons = moodData.map((e, index) => {
      return(
        <MoodButton key={index} title={e}/>
      )
    })
    return (
      <ScrollView horizontal={true}>
        <View style={styles.moodBar}>
          {moodButtons}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  moodBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 2
  }
});
