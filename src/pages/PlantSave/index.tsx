import React, { useState } from 'react';
import { 
    Alert,
    Image, 
    Platform, 
    ScrollView, 
    Text, 
    TouchableOpacity,
    View, 
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import {useNavigation, useRoute} from '@react-navigation/core';
import DateTimePicker, {Event}  from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';
import { RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';

import { Button } from '../../components/Button';
import { PlantProps, savePlant } from '../../libs/storage';

import waterdrop from '../../images/waterdrop.png';

import style from './styles';
import colors from '../../styles/colors';


interface Params{
    plant: PlantProps;
}

export function PlantSave() {
    const route = useRoute();
    const {plant} = route.params as Params;
    const navigation = useNavigation();

    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

    function handleToPlantSelect(){
        navigation.navigate('PlantSelect');
    }

    function handleChangeTime(event: Event, dateTime: Date | undefined){
        if(Platform.OS === 'android'){
            setShowDatePicker(oldState => !oldState)
        }

        if(dateTime && isBefore(dateTime, new Date())){
            setSelectedDateTime(new Date());
            return Alert.alert('Eii 🙋‍♂️', 'Escolha uma hora no futuro! ⏰');
        }

        if(dateTime){
            setSelectedDateTime(dateTime);
        }
    }

    function handleOpenDateTimePickerForAndroid() {
        setShowDatePicker(oldState => !oldState);
    }

    async function handleSave(){
        try {
            await savePlant({
                ...plant,
                dateTimeNotification: selectedDateTime
            });

            navigation.navigate('Confirmation',{
                title: 'Tudo certo' ,
                subTitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
                buttonTitle: 'Muito obrigado :D',
                icon: 'hug',
                nextScreen: 'MyPlants'

            });

        } catch {
            Alert.alert('Ops 😱','Não foi possível salvar. 😞');
        }
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={style.scrollListContainer}
        >   
            <View style={style.container}>

                <View style={style.plantInfo}>

                    <RectButton
                        style={style.buttonReturn}
                        onPress={handleToPlantSelect}
                    >
                        <Feather name="chevron-left" size={24} color={colors.heading} />
                    </RectButton>

                    <SvgFromUri
                        uri={plant.photo}
                        width={156}
                        height={176}
                    />

                    <Text style={style.plantName}>
                        {plant.name}
                    </Text>

                    <Text style={style.plantAbout}>
                        {plant.about}
                    </Text>
                </View>

                <View style={style.controllers}>
                    <View style={style.tipContainer}>
                        <Image 
                            source={waterdrop}
                            style={style.tipImage}
                        />

                        <Text style={style.tipText}>
                            {plant.water_tips}
                        </Text>
                    </View>

                    <Text style={style.alertLabel}>
                        Escolha o melhor horário para ser lembrado
                    </Text>

                    {showDatePicker && (
                        <DateTimePicker
                            value={selectedDateTime}
                            mode="time"
                            display="spinner"
                            onChange={handleChangeTime}
                        />
                    )}

                    {Platform.OS === 'android' && (
                        <TouchableOpacity 
                            onPress={handleOpenDateTimePickerForAndroid}
                            style={style.dateTimePickerButton}
                        >
                            <Text style={style.dateTimePickerText}>
                                {`Mudar alarme ${format(selectedDateTime, 'HH:mm')}`}
                            </Text>
                        </TouchableOpacity>
                    )}

                    <Button 
                        title="Cadastrar Planta" 
                        onPress={handleSave}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
