import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import MoodButton from './MoodButton';
import { database, firebaseListToArray } from '../utils/firebase';

export default class MoodBar extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      moods: []
    };
  }

  componentDidMount() {
    this.refs = database.refs('moods/');
    this.refs.on('value', snapshot => {
      let moodAry = firebaseListToArray(snapshot);
      // creates an empty mood if one does not exist
      // TODO check if it triggers recursively at least once on empty db!
      if(moodAry.length === 0) { // TODO evaluate whether we need this later!
        this.refs.push({
          title: '',
          songs: []
        });
      }

      this.setState({
        moods: moodAry
      });
    });
  }

  componentWillUnmount() {
    this.refs.off();
  }

  render() {
    let moodButtons = this.state.moods.map(moodObject => {
      return(
        <MoodButton
        isSelected={this.props.mood.id === moodObject.id}
        key={moodObject.id}
        _handlePressMood={this.props._handlePressMood}
        mood={moodObject}
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
    flex: 2,
    backgroundColor: 'orange'
  },
});
