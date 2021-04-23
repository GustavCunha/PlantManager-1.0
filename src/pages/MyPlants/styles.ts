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
    }
});

export default style;
