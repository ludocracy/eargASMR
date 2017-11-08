import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Dimensions,
  Image,
  Animated,
  Slider
} from 'react-native';
import SoundControl from './SoundControl';
import Timer from './Timer';
import SlidingUpPanel from 'rn-sliding-up-panel';


export default class ControlPanel extends Component<{}> {
  constructor(props){
    super(props);
    this.time = 5;
    this.state = {
      seconds: 0,
    };
    // this.reset = this.reset.bind(this);
    // this.start = this.start.bind(this);
    // this.pause = this.pause.bind(this);
  }

  startTimer(e){
    e.preventDefault();
    this.interval = setInterval(() => {
      this.setState({
        seconds: this.state.seconds - 1,
      });
    }, 1000);
  }

  stopTimer(e){
    e.preventDefault();
    if(this.interval) {
      clearInterval(this.interval)
      this.interval = null;
    } else {
      this.start();
    }
  }

  resetTimer(e){
    e.preventDefault();
    if(this.interval){
      clearInterval(this.interval)
      this.interval = null;
    }
    this.setState({
      seconds: 0,
    });
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#DDBEA2'}}>
        <Button
        onPress ={() => {}}
        title='Save Mood'
        />
        <Text>Master Volume</Text>
        <Slider />
        <Text>Sound 1</Text>
        <Slider />
        <Text>Sound 2</Text>
        <Slider />
        <Text>Sound 3</Text>
        <Slider />

      </View>
    );
  }
}

const styles = StyleSheet.create({
});
