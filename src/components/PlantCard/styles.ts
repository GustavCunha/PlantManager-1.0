import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const style = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        alignItems: 'center',
        margin: 10
    },
    button:{
        alignItems: 'center',
        paddingVertical: 10,
        width: '99%'
    },
    text:{
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical: 16
    }
})

export default style;