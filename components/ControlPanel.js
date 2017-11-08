import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Dimensions,
  Image,
  Animated,
  Slider,
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

    return (
      <View style={{flex: 10, backgroundColor: '#DDBEA2'}}>
        {titleComponent}
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
  text: {
    height: 20,
    textAlign: 'center'
  }
});
