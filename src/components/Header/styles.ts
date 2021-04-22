import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const style = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20, 
        marginTop: Constants.statusBarHeight,
    },
    title:{
        fontSize: 32,
        lineHeight: 36,
        color: colors.heading,
        fontFamily: fonts.text
    },
    subtitle:{
        fontSize: 32,
        lineHeight: 36,
        color: colors.heading,
        fontFamily: fonts.heading
    },
    image:{
        width: 56,
        height: 56,
        borderRadius: 100
    }

})

export default style;