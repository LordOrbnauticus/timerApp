import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';

    
const Timer = ({ interval, style }) => {
        const duration = moment.duration(interval)
        return (
        <Text style={style}>
        {duration.hours()}:{duration.minutes()}:{duration.seconds()}
        </Text>
    );
};

export default Timer;