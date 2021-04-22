import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import Load from '../../components/Load';
import PlantCard from '../../components/PlantCard';

import { PlantProps } from '../../libs/storage';
import api from '../../services/api';

import colors from '../../styles/colors';
import style from './styles';

interface EnvironmentProps {
    key: string;
    title: string;
}

export function PlantSelect() {

    const navigation = useNavigation();

    const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
    const [environmentSelected, setEnvironmentSelected] = useState('all');

    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);

    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);

    function handleEnvironmentSelected(environment: string){
        setEnvironmentSelected(environment);

        if(environment === 'all')
            return setFilteredPlants(plants);

        const filtered = plants.filter(plant => 
            plant.environments.includes(environment)
        );

        setFilteredPlants(filtered);
    }

    function handlePlantSelect(plant: PlantProps) {
        navigation.navigate('PlantSave', { plant });
    }

    async function fetchPlants() {
        const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);
        
        if(!data)
        return setLoading(true);

        if(page > 1){
            setPlants(oldValue => [...oldValue, ...data])
            setFilteredPlants(oldValue => [...oldValue, ...data])
        }else{
            setPlants(data);
            setFilteredPlants(data);
        }

        setLoading(false);
        setLoadingMore(false);
    }

    function handleFetchMore(distance: number) {
        if(distance < 1)
            return;

        setLoadingMore(true);
        setPage(oldValue => oldValue + 1);
        fetchPlants();
    }

    useEffect(() => {
        async function fetchEnvironment() {
            const { data } = await api.get('plants_environments?_sort=title&_order=asc');

            setEnvironments([
                {
                   key: 'all',
                   title: 'Todos',
                },
                ...data 
            ]);
        }

        fetchEnvironment();
    },[]);

    useEffect(() => {
        fetchPlants();
    },[]);


    if(loading){
        return <Load />
    }
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Header title="Olá,"/>

                <Text style={style.title}>Em qual ambiente</Text>

                <Text style={style.subTitle}>você quer colocar sua planta?</Text>
            </View>

            <View>
                <FlatList 
                    data={environments}
                    keyExtractor={(item) => String(item.key)}
                    renderItem={({ item })=> (
                        <EnvironmentButton 
                            key={item.key} 
                            title={item.title}
                            active={item.key === environmentSelected}
                            onPress={() => handleEnvironmentSelected(item.key)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={style.environmentList}
                    ListHeaderComponent={<View />}
                    ListHeaderComponentStyle={{ marginRight: 32 }}
                />
            </View>

            
            <View style={style.plants}>
                <FlatList 
                    data={filteredPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item })=> (
                        <PlantCard 
                            data={item}
                            onPress={() => handlePlantSelect(item)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
                    ListFooterComponent={
                        loadingMore 
                        ? <ActivityIndicator color={colors.green} />
                        : <></>
                    }
                />
            </View>
        </View>
    )
}
