import React from 'react';
import { StyleSheet, Text } from 'react-native';
import moment from 'moment';

    
const Timer = ({ interval }) => {
        const duration = moment.duration(interval)
        return (
        <Text style={styles.timer}>
        {duration.hours()}:{duration.minutes()}:{duration.seconds()}
        </Text>
    );
};

const styles = StyleSheet.create({
    timer: {
        color: '#F9FFF6',
        fontSize: 64,
        fontWeight: '200',
      },
});

export default Timer