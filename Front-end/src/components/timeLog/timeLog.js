import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Log = ({ number, duration }) => {
    return (
        <View style={styles.log}>
            <Text style={styles.logText}> Log { number }</Text>
            <Text style={styles.logText}>{ duration }</Text>
        </View>
    )
}

export default Log

const styles = StyleSheet.create({
    log: {},
    logText: {
        color: '#F9FFF6'
    },
})

//needs to be moved to /logTable folder when we get back... 