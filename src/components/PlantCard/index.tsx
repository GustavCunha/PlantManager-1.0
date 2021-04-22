import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import style from './styles';

interface PlantProps extends RectButtonProps{
    data: {
        name: string;
        photo: string;
    }
}

export default function PlantCard({data, ...rest}: PlantProps) {
    return (
        <RectButton 
            style={style.container}
            {...rest}
        >

            <SvgFromUri 
                uri={data.photo} 
                width={70} 
                height={70}
            />

            <Text style={style.text}>
                {data.name}
            </Text>
        </RectButton>
    )
}
