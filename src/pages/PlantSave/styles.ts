import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const style = StyleSheet.create({
    scrollListContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape
    },
    container:{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.red
    },
    buttonReturn:{
        width: 40,
        height: 40,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        position: 'absolute',
        top: '10%',
        left: '5%'
    },
    plantInfo:{
        flex: 1,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape
    },
    plantName:{
        fontFamily: fonts.heading,
        fontSize: 24,
        lineHeight: 32,
        color: colors.heading,
        marginTop: 32
    },
    plantAbout:{
        textAlign: 'center',
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 17,
        lineHeight: 25,
        marginTop: 15
    },
    controllers:{
        backgroundColor: colors.white,
        paddingHorizontal: 30,
        paddingVertical: 20
    },
    tipContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.blue_light,
        padding: 16,
        borderRadius: 20,
        position: 'relative',
        bottom: '20%'
    },
    tipImage:{
        width: 56,
        height: 56,
    },
    tipText:{
        flex: 1,
        marginLeft: 20,
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 15,
        lineHeight: 23,
        textAlign: 'left'
    },
    alertLabel:{
        textAlign: 'center',
        fontFamily: fonts.complement,
        fontSize: 13,
        lineHeight: 23,
        color: colors.heading,
        marginBottom: 5
    },
    dateTimePickerButton:{
        width: '100%',
        alignItems: 'center',
        paddingVertical: 40,
    },
    dateTimePickerText:{
        color: colors.heading,
        fontSize: 24,
        fontFamily: fonts.text,
        lineHeight: 32
    }
})


export default style