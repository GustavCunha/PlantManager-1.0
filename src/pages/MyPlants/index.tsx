import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, Alert, Modal } from 'react-native';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

import { Header } from '../../components/Header';
import Load from '../../components/Load';
import {PlantCardInfo} from '../../components/PlantCardInfo';

import { loadPlant, PlantProps, removePlant } from '../../libs/storage';

import waterdrop from '../../images/waterdrop.png';

import style from './styles';
import { OptionButton } from '../../components/OptionButton';
import colors from '../../styles/colors';

export function MyPlants() {

    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWaterd, setNextWaterd] = useState<string>();
    const [isVisible, setIsVisible] = useState(true);

    function handleRemove(plant: PlantProps) {
        Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
            {
                text: 'Não 🙏',
                style: 'cancel'
            },
            {
                text: 'Sim 😢',
                onPress: async ()=> {
                    try {
                        await removePlant(plant.id);

                        setMyPlants((oldData) => 
                            oldData.filter((item) => item.id !== plant.id)
                        );

                    } catch (error) {
                        Alert.alert('Ops 😱','Não foi possível remover. 😞');
                    }
                }
            }
        ])
    }

    useEffect(() => {
        async function loadStorageData() {
            const plantsStoraged = await loadPlant();

            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                {locale: pt}
            );

            setNextWaterd(
                `Não esqueça de regar a ${plantsStoraged[0].name} daqui à ${nextTime}`
            );

            setMyPlants(plantsStoraged);
            setLoading(false);
        }

        loadStorageData();
    },[]);

    if(loading){
        return <Load />
    }

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
                        <PlantCardInfo 
                            data={item} 
                            handleRemove={()=>{handleRemove(item)}}    
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{flex: 1}}
                />
            </View>

            <Modal
                animationType='slide'
                visible={isVisible}
            >
                <View style={style.box}>
                    
                    {/* <View style={style.boxImage}>
                        <Image source={}/>
                    </View> */}

                    <Text style={style.ask}>
                        Deseja mesmo deletar sua {'\n'}
                        <Text style={style.namePlant}>?</Text>
                    </Text>
                    
                    <View style={style.buttonContainer}>
                        <OptionButton 
                            title="Cancelar" 
                            color={colors.heading} 
                        />

                        <OptionButton 
                            title="Deletar" 
                            color={colors.red} 
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}
