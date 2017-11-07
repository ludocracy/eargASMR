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
      mood: 'heeeey',
      isPlaying: false,
    }
    this._handlePressMood = this._handlePressMood.bind(this)
  }

  _handlePressMood(e, id){
    this.setState({
      mood: id,
      isPlaying: !this.state.isPlaying
    })
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Header />
        <MoodBar handlePressMood={this._handlePressMood} mood={this.state.mood}/>
        <SoundBoard mood={this.state.mood} isPlaying={this.state.isPlaying}/>
        <ControlPanel />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
