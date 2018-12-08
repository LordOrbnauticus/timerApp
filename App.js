import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const DATA = {
  timer: 1234567,
  log: [ 1234, 2345, 3456, 4567]
}

function Timer({ interval }) {
  return <Text style={styles.timer}>{ interval }</Text>
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer interval={DATA.timer}/>
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
  },
  timer: {
    color: '#FFFFFF',
    fontSize: 64,
    fontWeight: '200',
  },
});
