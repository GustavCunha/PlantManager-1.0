import React from 'react';
import { View, Text, Animated } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { SvgFromUri } from 'react-native-svg';

import {Feather} from '@expo/vector-icons';

import style from './styles';
import colors from '../../styles/colors';

interface PlantProps extends RectButtonProps{
    data: {
        name: string;
        photo: string;
        hour: string;
    };
    handleRemove: () => void;
}


export function PlantCardInfo({data, handleRemove, ...rest}: PlantProps) {
    return (
        <Swipeable
            overshootRight={false}
            renderRightActions={()=>(
                <Animated.View>
                    <View>
                        <RectButton
                            style={style.buttonRemove}
                            onPress={handleRemove}
                        >
                            <Feather name="trash" size={32} color={colors.white} />
                        </RectButton>
                    </View>
                </Animated.View>
            )}
        >
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
        </Swipeable>
    )
}
