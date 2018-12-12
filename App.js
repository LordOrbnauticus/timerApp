import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Timer from './Front-end/src/components/timer/timer';
import RoundButton from './Front-end/src/components/roundButton/roundbutton';
import LogTable from './Front-end/src/components/logTable/logTable'


const DATA = {
  timer: 1234567,
  log: [ 1234, 2345, 3456, 4567, 5678, 6789, 7890]
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
        <Timer interval={DATA.timer}/>
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
});
