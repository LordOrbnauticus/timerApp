import React, { Component } from 'react';
import { Stylesheet, View, Text } from 'react-native';

const Log = ({ number, duration }) => {
    return (
        <View>
            <Text> Log { number }</Text>
            <Text>{ duration }</Text>
        </View>
    )
}

export default Log

//needs to be moved to /logTable folder when we get back... 