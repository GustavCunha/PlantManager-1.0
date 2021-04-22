import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
    wrapper:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 40
    },
    title:{
        fontSize: 32,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        lineHeight: 38
    },
    subTitle:{
        textAlign: 'center',
        fontSize: 17,
        fontFamily: fonts.text,
        lineHeight: 25,
        paddingHorizontal: 20,
        color: colors.heading
    },
    button:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    image:{
        height: Dimensions.get('window').width * 0.7
    }
})

export default style;