import React from 'react';
import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
    SafeAreaView 
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {Feather} from '@expo/vector-icons';

import wateringImg from '../../images/watering.png';
import colors from '../../styles/colors';

import style from './styles';

export function Welcome() {
    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification')
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.wrapper}>
                <Text style={style.title}>
                    Gerencie{"\n"} 
                    suas plantas de {"\n"}
                    forma fácil
                </Text>

                <Image 
                    source={wateringImg} 
                    style={style.image}
                    resizeMode="contain"
                />

                <Text style={style.subTitle}>
                    Não esqueça mais de regar suas plantas. 
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity 
                    style={style.button} 
                    activeOpacity={0.7}
                    onPress={handleStart}
                >
                    <Feather name="chevron-right" size={24} color={colors.white} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
