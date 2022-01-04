import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface OptionButtonProps extends RectButtonProps{
    title: string;
    color: string;
}

export function OptionButton({title, color, ...rest}: OptionButtonProps) {
    return (
        <RectButton
            style={style.container}
        >
            <Text 
                style={[style.text, {color: color}]}
            >
                {title}
            </Text>
        </RectButton>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        borderRadius: 12,
        width: 96,
        height: 48
    },
    text:{
        fontFamily: fonts.text,
        fontSize: 15,
        lineHeight: 23,
        textAlign: 'center'
    }
});

