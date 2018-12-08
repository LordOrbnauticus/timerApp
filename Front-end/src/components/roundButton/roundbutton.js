import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RoundButton = ({ title, color, background }) => {
    return (
        <View style={[ styles.button, { backgroundColor: background }]}>
            <Text style={[ styles.buttonTitle, { color }]}>{ title }</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        fontSize: 18,
    },
});

export default RoundButton;