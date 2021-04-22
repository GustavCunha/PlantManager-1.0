import React, { useState } from 'react';
import { 
    KeyboardAvoidingView,
    View, 
    Text, 
    SafeAreaView, 
    TextInput,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/core'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../../components/Button';
import colors from '../../styles/colors';

import style from './styles';

export function UserIdentification() {

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    const navigation = useNavigation();

    async function handleSubmit(){
        if(!name)
            return Alert.alert('Ops 😱','Me diz como chamar você 😥');
        else if( name?.length < 2)
            return Alert.alert('Opa 😅','Precisa de mais uma letra no mínimo 😉');

        try{
            await AsyncStorage.setItem('@plantmanager:user', name);
            navigation.navigate('Confirmation',{
                title: 'Prontinho' ,
                subTitle: 'Agora vamos começar a cuidar as suas plantinhas com muito cuidado.',
                buttonTitle: 'Começar',
                icon: 'smile',
                nextScreen: 'PlantSelect'

            });
        }catch{
            Alert.alert('Ops 😱','Não foi possível salvar o seu nome 😞');
        }
    }

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);

    }

    return (
        <SafeAreaView style={style.container}>
            <KeyboardAvoidingView 
                style={style.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={style.content}>
                        <View style={style.form}>
                            <Text style={style.emoji}>
                                {isFilled ? '😄' : '😀'}
                            </Text>

                            <Text style={style.title}>
                                Como podemos {'\n'} 
                                chamar você?
                            </Text>

                            <TextInput 
                                style={[
                                    style.input,
                                    (isFocused || isFilled) && {borderColor: colors.green},
                                    
                                ]}
                                placeholder="Digite seu nome"
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />

                            <View style={style.footer}>
                                <Button 
                                    title="Confirmar"
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}