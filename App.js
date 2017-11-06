import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Header from './components/Header';
import MoodBar from './components/MoodBar';
import SoundBoard from './components/SoundBoard';
import ControlPanel from './components/ControlPanel';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Header />
        <MoodBar />
        <SoundBoard />
        <ControlPanel />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
