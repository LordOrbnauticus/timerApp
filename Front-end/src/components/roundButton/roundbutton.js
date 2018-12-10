import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RoundButton = ({ title, color, background }) => {
    return (
        <View style={[ styles.button, { backgroundColor: background }]}>
            <View style={ styles.buttonBorder }>
                <Text style={[ styles.buttonTitle, { color }]}>{ title }</Text>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        fontSize: 12,
    },
    buttonBorder: {
        width: 55,
        height: 55,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: '#353542',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RoundButton;