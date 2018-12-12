import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Log from '../timeLog/timeLog'

const LogTable = ({ logs }) => {
    return (
        <ScrollView style={styles.scrollview}>
            {logs.map((log, index) => (
                <Log key={index} number={index} duration={log}/>
            ))}
        </ScrollView>
    );
}

export default LogTable;

const styles = StyleSheet.create({
    scrollview: {
        alignSelf: 'stretch'
    },
})