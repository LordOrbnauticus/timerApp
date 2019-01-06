import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import LogScreen from "./Front-end/screens/logScreen.js";

const AppStackNavigator = createStackNavigator({
  Logs: LogScreen
});

const App = createAppContainer(AppStackNavigator);

export default App;
