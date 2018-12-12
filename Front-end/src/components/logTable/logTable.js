import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Log from '../timeLog/timeLog'

const LogTable = ({ logs }) => {
    return (
        <ScrollView>
            {logs.map((log, index) => (
                <Log key={index} number={index} duration={log}/>
            ))}
        </ScrollView>
    );
}

export default LogTable;