import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';
import Header from './components/Header';
import MoodBar from './components/MoodBar';
import SoundBoard from './components/SoundBoard';
import ControlPanel from './components/ControlPanel';
import jsonSoundData from './sounds.json';
import Sound from 'react-native-sound';
import { database, firebaseListToArray } from './utils/firebase';

export default class App extends Component<{}> {
  constructor(props){
    super(props);

    this.state = {
      mood: null,
      moods: [],
      isControl: false,
      isPlaying: true
    };

    this.players = {};

    this._setMoodState = this._setMoodState.bind(this);
    this._handlePressMood = this._handlePressMood.bind(this);
  }

  // loading all sound players before app renders
  // also wraps sound player in an object with our own play() and pause() functions
  // and a boolean isPlaying because react-native-sound does not support isPlaying()
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

  // loading moods here instead of moodbar so that they load more consistently
  // and so we can track them with state
  componentDidMount() {
    this.ref = database.ref('moods');
    this.ref.on('value', snapshot => {
      let moodAry = firebaseListToArray(snapshot.val());
      // creates an empty mood if one does not exist
      if(moodAry.length === 0) {
        let pushRef = this.ref.push();
        pushRef.set({
          title: 'name this mood',
          sounds: {}
        });
      } else {
        this.setState({
          moods: moodAry,
          mood: moodAry[0]
        });
      }
    });
  }

  componentWillUnmount() {
    this.ref.off();
  }

  // method is either 'play' or 'pause'
  _setMoodState(method, sound = null) {
    if(this.state.mood.sounds === undefined) {
      this.state.mood.sounds = {};
    }
    if(sound) {
      this.state.mood.sounds[sound.title] = sound;
    }

    for(let soundTitle in this.players) {
      // only plays/pauses a sound if mood.sounds object includes given sound title
      if(this.state.mood.sounds && this.state.mood.sounds[soundTitle]) {
        // invokes either the play or pause method on the player
        this.players[soundTitle][method]();
      }
    }
  }

  // user presses mood button, pausing/playing all sounds and selecting current mood
  _handlePressMood(e, mood = null){
    this._setMoodState(this.state.isPlaying ? 'pause' : 'play');

    // TODO maybe wrap this in an if statement?
    this.setState({
      mood: mood || this.state.mood,
    });
  }

  render() {
    let titleText = this.state.isControl ? 'Show Sounds' : 'Show Controls';
    let home
    if (this.state.mood === null){
      home = <View />;
    }else{
      home = this.state.isControl
        ? <ControlPanel mood={this.state.mood} players={this.players}/>
        : <SoundBoard mood={this.state.mood}
            _setMoodState={this._setMoodState} players={this.players} />;
    }

    return (
      <View style={{flex: 1, paddingTop: 20, backgroundColor: '#263D42'}}>
        <Header />
        <MoodBar _handlePressMood={this._handlePressMood}
          mood={this.state.mood} moods={this.state.moods}/>
        {home}
        <TouchableOpacity style={styles.showButton} title={titleText} onPress={() => this.setState({isControl:!this.state.isControl})}>
          <Text style={styles.panelText}>
            {titleText}
          </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  showButton: {
    flex: 1,
    backgroundColor: '#D33F49',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginLeft: 90,
    marginRight: 90
  },
  panelText: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    color: '#FBFEF9'
  }
});
