import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Header from './components/Header';
import MoodBar from './components/MoodBar';
import SoundBoard from './components/SoundBoard';
import ControlPanel from './components/ControlPanel';

export default class App extends Component<{}> {
  constructor(props){
    super(props);

    this.state = {
      mood: null,
      isPlaying: false
    };

    this._handlePressMood = this._handlePressMood.bind(this);
  }

  // e is null if called explicitly e.g: this._handlePressMood(null, a_mood)
  // however, this method will also be used as an event listener callback where we
  // actually want to change the value of isPlaying
  _handlePressMood(e, mood){
    this.setState({
      mood: mood,
      isPlaying: e ? !this.state.isPlaying : this.state.isPlaying
    });
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Header />
        <MoodBar _handlePressMood={this._handlePressMood} mood={this.state.mood}/>
        <SoundBoard mood={this.state.mood} isPlaying={this.state.isPlaying}/>
        <ControlPanel />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
