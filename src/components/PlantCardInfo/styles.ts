import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 85,
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.shape,
        marginVertical: 5
    },
    plantName:{
        flex: 1,
        marginLeft: 10,
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
    },
    details:{
        alignItems: 'flex-end'
    },
    timeLabel: {
        fontSize: 13,
        lineHeight: 20, 
        fontFamily: fonts.complement,
        color: colors.body_light
    },
    time: {
        marginTop: 5,
        fontSize: 13,
        lineHeight: 20,
        fontFamily: fonts.complement,
        color: colors.body_dark
    },

    buttonRemove:{
        width:100,
        height: 85,
        backgroundColor: colors.red,
        borderRadius: 20,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: 20,
        paddingLeft: 15
    }
})

export default style;