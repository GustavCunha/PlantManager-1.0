import { LinearGradient } from 'expo-linear-gradient';
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
        <LinearGradient
            colors={['#F0f0f0','#F5FAF7']}
            start={[0.25, 1.3]}
            style={style.container}
        >
            <RectButton 
                style={style.button}
                {...rest}
            >
                    <SvgFromUri 
                        uri={data.photo} 
                        width={80} 
                        height={80}
                    />

                    <Text style={style.text}>
                        {data.name}
                    </Text>
            </RectButton>
        </LinearGradient>
    )
}
