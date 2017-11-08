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
    this.ref = database.ref('moods');
    this.ref.on('value', snapshot => {
      let moodAry = firebaseListToArray(snapshot.val());
      // creates an empty mood if one does not exist
      if(moodAry.length === 0) {
        let pushRef = this.ref.push();
        pushRef.set({
          title: 'name this mood',
          songs: []
        });

        this.props._handlePressMood(null, pushRef.val())
      }

      this.setState({
        moods: moodAry
      });
    });
  }

  componentWillUnmount() {
    this.ref.off();
  }

  render() {
    let moodButtons = this.state.moods.map(moodObject => {
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
    backgroundColor: 'white',
  },
});
