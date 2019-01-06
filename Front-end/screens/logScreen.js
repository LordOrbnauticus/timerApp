import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Timer from "../src/logScreen/components/timer/timer";
import RoundButton from "../src/logScreen/components/roundButton/roundbutton";
import LogTable from "../src/logScreen/components/logTable/logTable";

const DATA = {
  timer: 12345678910,
  log: [12345678, 23456789, 34567890]
};

const AlignButtons = ({ children }) => {
  return <View style={styles.buttonRow}>{children}</View>;
};

export default class LogScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer interval={DATA.timer} style={styles.timerStyles} />
        <LogTable logs={DATA.log} />
        <AlignButtons>
          <RoundButton title="Log" color="#322F3C" background="#A9BDBF" borderColor="#322F3C" />
          <RoundButton title="Record" color="#FF0000" background="#E6B2B2" borderColor="#FFFFFF" />
        </AlignButtons>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F9FFF6",
    alignItems: "center",
    paddingTop: 80,
    fontFamily: "Roboto"
  },
  buttonRow: {
    marginTop: 50,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 30
  },
  timerStyles: {
    color: "#322F3C",
    fontSize: 64,
    fontWeight: "200",
    paddingBottom: 50
  }
});
