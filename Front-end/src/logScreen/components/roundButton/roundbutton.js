import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RoundButton = ({ title, color, background, borderColor }) => {
    return (
        <View style={[ styles.button, { backgroundColor: background }]}>
            <View style={[ styles.buttonBorder, { borderColor } ]}>
                <Text style={[ styles.buttonTitle, { color }]}>{ title }</Text>
            </View>
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
        fontSize: 12,
    },
    buttonBorder: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RoundButton;