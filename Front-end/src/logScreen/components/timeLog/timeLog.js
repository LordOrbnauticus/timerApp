import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Timer from '../timer/timer';

const Log = ({ number, duration }) => {
    return (
        <View style={styles.log}>
            <Text style={styles.logText}> Log { number }</Text>
            <Timer style={styles.timerStyles} interval={duration} />
        </View>
    )
}

export default Log

const styles = StyleSheet.create({
    log: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#F9FFF6',
        borderTopWidth: 1,
        paddingVertical: 10,
    },
    logText: {
        color: '#322F3C',
        fontSize: 18,
    },
    timerStyles: {
        color: '#322F3C',
        fontWeight: '200',
    }
})

//needs to be moved to /logTable folder when we get back...