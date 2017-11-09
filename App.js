import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import Header from './components/Header';
import MoodBar from './components/MoodBar';
import SoundBoard from './components/SoundBoard';
import ControlPanel from './components/ControlPanel';
import jsonSoundData from './sounds.json';
import Sound from 'react-native-sound';

export default class App extends Component<{}> {
  constructor(props){
    super(props);

    this.state = {
      mood: null,
      isControl: false,
      isPlaying: true
    };

    this.players = {};

    this._handlePressMood = this._handlePressMood.bind(this);
  }

  componentWillMount() {
    jsonSoundData.sounds.forEach(sound => {
      let soundPlayer = new Sound(sound.soundUrl);
      soundPlayer.setNumberOfLoops(-1);
      this.players[sound.title] = {
        player: soundPlayer,
        isPlaying: false,
        play: function() {
          this.isPlaying = true;
          soundPlayer.play();
        },
        pause: function() {
          this.isPlaying = false;
          soundPlayer.pause();
        }
      };
    });
  }

  // e is null if called explicitly e.g: this._handlePressMood(null, a_mood)
  // however, this method will also be used as an event listener callback where we
  // actually want to change the value of isPlaying
  _handlePressMood(e, mood = null){

    this.setState({
      mood: mood || this.state.mood,
      isPlaying: e ? !this.state.isPlaying : this.state.isPlaying
    });
  }

  render() {
    let titleText = this.state.isControl ? 'show sounds' : 'show controls';
    let home
    if (this.state.mood === null){
      home = <View />;
    }else{
      home = this.state.isControl
        ? <ControlPanel mood={this.state.mood} players={this.players}/>
        : <SoundBoard mood={this.state.mood} players={this.players} />;
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Header />
        <MoodBar _handlePressMood={this._handlePressMood} mood={this.state.mood}/>
        {home}
        <Button title={titleText} onPress={() => this.setState({isControl:!this.state.isControl})}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
