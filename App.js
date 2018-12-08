import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Timer from './Front-end/src/components/timer/timer';
import RoundButton from './Front-end/src/components/roundButton/roundbutton';


const DATA = {
  timer: 1234567,
  log: [ 1234, 2345, 3456, 4567]
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer interval={DATA.timer}/>
        <RoundButton title='Record' color='#FF0000' background='#E6B2B2'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353542',
    alignItems: 'center',
    paddingTop: 130,
    fontFamily: 'Roboto'
  },
});
