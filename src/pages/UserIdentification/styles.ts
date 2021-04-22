import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content:{
        flex: 1,
        width: '100%'
    },
    form:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 54,
    },
    emoji:{
        fontSize: 36
    },
    title:{
        fontSize: 24,
        lineHeight: 32,
        marginTop: 20,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading
    },
    input:{
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    footer:{
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }
});

export default style;