import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export default class Timer extends Component<{}> {
  render() {
    return (
      <View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

// constructor(props){
//   super(props);
//   this.time = 5;
//   this.state = {
//     seconds: 0,
//   };
//   // this.reset = this.reset.bind(this);
//   // this.start = this.start.bind(this);
//   // this.pause = this.pause.bind(this);
// }
//
// startTimer(e){
//   e.preventDefault();
//   this.interval = setInterval(() => {
//     this.setState({
//       seconds: this.state.seconds - 1,
//     });
//   }, 1000);
// }
//
// stopTimer(e){
//   e.preventDefault();
//   if(this.interval) {
//     clearInterval(this.interval)
//     this.interval = null;
//   } else {
//     this.start();
//   }
// }
//
// resetTimer(e){
//   e.preventDefault();
//   if(this.interval){
//     clearInterval(this.interval)
//     this.interval = null;
//   }
//   this.setState({
//     seconds: 0,
//   });
// }
