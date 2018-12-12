import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Timer from './Front-end/src/components/timer/timer';
import RoundButton from './Front-end/src/components/roundButton/roundbutton';
import LogTable from './Front-end/src/components/logTable/logTable'


const DATA = {
  timer: 12345678910,
  log: [ 12345678, 23456789, 34567890]
}

const AlignButtons = ({ children }) => {
  return (
    <View style={styles.buttonRow}>
      { children }
    </View>
  )
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer interval={DATA.timer} style={styles.timerStyles}/>
        <AlignButtons>
          <RoundButton title='Log' color='black' background='#A9BDBF' />
          <RoundButton title='Record' color='#FF0000' background='#E6B2B2'/>
        </AlignButtons>
        <LogTable logs={DATA.log} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#353542',
    alignItems: 'center',
    paddingTop: 130,
    fontFamily: 'Roboto'
  },
  buttonRow: {
    marginTop: 80,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  timerStyles: {
    color: '#F9FFF6',
    fontSize: 64,
    fontWeight: '200',
  },
});
