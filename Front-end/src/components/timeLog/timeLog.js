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
        borderColor: '#353542',
        borderTopWidth: 1,
        paddingVertical: 10
    },
    logText: {
        color: '#F9FFF6',
        fontSize: 18,
    },
    timerStyles: {
        color: '#F9FFF6',
        fontWeight: '200',
    }
})

//needs to be moved to /logTable folder when we get back... 