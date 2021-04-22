import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';

import { Button } from '../../components/Button';

import style from './styles';


interface Params {
    title: string;
    subTitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug';
    nextScreen: string;
}

const emojis = {
    hug: '🤗',
    smile: '😆'
}

export function Confirmation() {

    const navigation = useNavigation();
    const routes = useRoute();
    const {
        title,
        subTitle,
        buttonTitle,
        icon,
        nextScreen
    } = routes.params as Params;

    function handleMoveOn(){
        navigation.navigate(nextScreen);
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.content}>
                <Text style={style.emoji}>
                    {emojis[icon]}
                </Text>

                <Text style={style.title}>
                    {title} 
                </Text>

                <Text style={style.subTitle}>
                    {subTitle} 
                </Text>

                <View style={style.footer}>
                    <Button title={buttonTitle} onPress={handleMoveOn}/>
                </View>
            </View>

            
        </SafeAreaView>
    )
}
