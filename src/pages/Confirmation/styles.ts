import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20
    },
    emoji:{
        fontSize: 96,
        textAlign: 'center'
    },
    title:{
        fontSize: 24,
        lineHeight: 30,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 64
    },
    subTitle:{
        fontSize: 17,
        lineHeight: 25,
        fontFamily: fonts.text,
        color: colors.body_dark,
        marginTop: 16,
        textAlign: 'center',
        paddingHorizontal: 20
    },
    footer:{
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 40 
    }
});

export default style;
