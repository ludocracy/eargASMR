import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import SoundControl from './SoundControl';
import Timer from './Timer';
import { database } from '../utils/firebase';


export default class ControlPanel extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.mood.title,
      isEditing: false
    };
    this._toggleTitleState = this._toggleTitleState.bind(this);
    this._handleTitleSubmit = this._handleTitleSubmit.bind(this);
    this._handleTitleChange = this._handleTitleChange.bind(this);
  }

  _toggleTitleState() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  _handleTitleSubmit(){
    this.setState({
      isEditing: !this.state.isEditing
    });

    database.ref(`moods/${this.props.mood.id}`).update({
      title: this.state.title
    });
  }

  _handleTitleChange(title) {
    this.setState({
      title: title
    });
  }

  render() {
    let titleComponent = this.state.isEditing
      ? <TextInput style={styles.text} onBlur={this._handleTitleSubmit}
          placeholder={this.state.title} onChangeText={this._handleTitleChange}/>
      : <Text style={styles.text} onPress={this._toggleTitleState}>{this.state.title}</Text>;

    let soundControls = [];
    for(let key in this.props.players) {
      let player = this.props.players[key];
      if(player.isPlaying) {
        soundControls.push(<SoundControl player={player} title={key} key={key}/>);
      }
    }
    return (
      <View style={{flex: 10, backgroundColor: '#FBFEF9'}}>
        {titleComponent}
        {soundControls}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 33,
    textAlign: 'center',
    fontFamily: 'HiraKakuProN-W3',
    paddingTop: 20
  }
});
