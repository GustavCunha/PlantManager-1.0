import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Image } from 'react-native';

import userImg from '../../images/gustavo.png';

import style from './styles';

interface HeaderProps{
    title: string;
    subtitle?: string;
}

export function Header({title, subtitle}: HeaderProps) {
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user || '');
        }

        loadStorageUserName();
    },[]);

    return (
        <View style={style.container}>
            <View>
                <Text style={style.title}>{title}</Text>
                <Text style={style.subtitle}>{userName}</Text>
            </View>

            <Image source={userImg} style={style.image}/>
        </View>
    )
}
