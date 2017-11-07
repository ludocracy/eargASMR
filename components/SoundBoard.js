import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import SoundButton from './SoundButton';
import { database, firebaseListToArray} from '../utils/firebase';

export default class SoundBoard extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      sounds: []
    }
  }

  componentDidMount() {
    this.refs = database.refs('sounds');
    this.refs.on('value', snapshot => {
      this.setState({
        sounds: firebaseListToArray(snapshot)
      });
    });
  }

  componentWillUnmount() {
    this.refs.off();
  }

  render() {
    let soundButtons = this.state.sounds.map(soundData => {
      return (
        <SoundButton key={soundData.id} sound={soundData} mood={this.props.mood} />
      )
    })
    return (
      <View style={styles.soundBoard}>
        {soundButtons}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
  soundBoard: {
    justifyContent: 'space-around',
    alignContent: 'space-around',
    flexDirection: 'row',
    flex: 10,
    flexWrap: 'wrap',
    backgroundColor: 'skyblue'}
});
