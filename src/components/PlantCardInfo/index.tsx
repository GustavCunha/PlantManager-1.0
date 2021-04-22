import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import style from './styles';

interface PlantProps extends RectButtonProps{
    data: {
        name: string;
        photo: string;
        hour: string;
    }
}

export function PlantCardInfo({data, ...rest}: PlantProps) {
    return (
        <RectButton 
            style={style.container}
            {...rest}
        >

            <SvgFromUri 
                uri={data.photo} 
                width={50} 
                height={50}
            />

            <Text style={style.plantName}>
                {data.name}
            </Text>

            <View style={style.details}>
                <Text style={style.timeLabel}>
                    Regar às
                </Text>

                <Text style={style.time}>
                    {data.hour}
                </Text>
            </View>
        </RectButton>
    )
}
