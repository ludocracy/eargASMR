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
    this.toggleTitleState = this.toggleTitleState.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  toggleTitleState() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  handleTitleChange(){
    this.setState({
      isEditing: !this.state.isEditing
    });

    database.ref(`moods/${this.props.mood.id}`).update({
      title: this.state.title
    });
  }

  render() {
    let titleComponent = this.state.isEditing
      ? <TextInput style={styles.text} onBlur={this.handleTitleChange}
          placeholder={this.state.title} onChange={e => this.setState({title: e.target.value})}/>
      : <Text style={styles.text} onPress={this.toggleTitleState}>{this.state.title}</Text>;

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
