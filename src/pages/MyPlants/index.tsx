import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

import { Header } from '../../components/Header';
import {PlantCardInfo} from '../../components/PlantCardInfo';
import { loadPlant, PlantProps } from '../../libs/storage';

import waterdrop from '../../images/waterdrop.png';

import style from './styles';

export function MyPlants() {

    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWaterd, setNextWaterd] = useState<string>();

    useEffect(() => {
        async function loadStorageData() {
            const plantsStoraged = await loadPlant();

            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                {locale: pt}
            );

            setNextWaterd(
                `Não esqueça de regar a ${plantsStoraged[0].name} às ${nextTime} horas. `
            );

            setMyPlants(plantsStoraged);
            setLoading(false);
        }

        loadStorageData();
    },[]);

    return (
        <View style={style.container}>
            <Header title="Minhas"/>

            <View style={style.spotlight}>
                <Image 
                    source={waterdrop} 
                    style={style.spotlightImage}
                />

                <Text style={style.spotlightText}>
                    {nextWaterd}
                </Text>
            </View>

            <View style={style.plants}>
                <Text style={style.plantsTitle}>
                    Próximas regadas
                </Text>

                <FlatList
                    data={myPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <PlantCardInfo data={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{flex: 1}}
                />
            </View>
        </View>
    )
}
