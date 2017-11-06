import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import MoodButton from './MoodButton';

export default class MoodBar extends Component<{}> {
  _getStyles(id){
    if (this.props.mood === id) {
      console.log(`${this.props.mood} === ${id}`)
      return styles.selected
    } else {
      console.log(`${this.props.mood} !== ${id}`)
      return styles.unselected
    }
  }

  render() {
    let moodData = [{title:'mood1', id: 1}, {title: 'mood2', id: 2}, {title: 'mood3', id: 3}]
    let moodButtons = moodData.map((moodObject, index) => {
      return(
        <MoodButton
        isSelected={this.props.mood === moodObject.id}
        key={index} title={moodObject.title}
        handlePressMood={this.props.handlePressMood}
        id={moodObject.id}
        />
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
    alignItems: 'center',
    alignContent: 'space-around',
    flexDirection: 'row',
    flex: 2
  },
});
