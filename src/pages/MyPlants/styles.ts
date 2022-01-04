import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: '5%',
        backgroundColor: colors.background
    },
    spotlight:{
        backgroundColor: colors.blue_light,
        paddingHorizontal: 20,
        borderRadius: 20,
        height: 88,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20
    },
    spotlightImage:{
        width: 56,
        height: 56
    },
    spotlightText: {
        fontFamily: fonts.text,
        fontSize: 15,
        lineHeight: 23,
        color: colors.blue,
        flex: 1,
        paddingHorizontal: 20,
        textAlign: 'left'
    },
    plants:{
        flex: 1,
        width: '100%'
    },
    plantsTitle:{
        fontSize: 24,
        lineHeight: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        marginVertical: 20
    },
    box:{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        borderRadius: 20
    },
    boxImage:{
        borderRadius: 20,
        backgroundColor: colors.shape,
        height: 120,
        width: 120
    },
    ask:{
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 25,
        textAlign: 'center',
        color: colors.heading
    },
    namePlant:{
        fontFamily: fonts.heading,
        fontSize: 17,
        lineHeight: 25,
        textAlign: 'center',
        color: colors.heading
    },
    buttonContainer:{
        flexDirection: 'row',
        marginTop: 24
    }
});

export default style;
