import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: '5%',
    },
    header:{
        paddingHorizontal: 30
    },
    title:{
        fontSize: 17,
        lineHeight: 23,
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 15
    },
    subTitle: {
        fontSize: 17,
        lineHeight: 23,
        color: colors.heading,
        fontFamily: fonts.text
    },
    environmentList:{
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginVertical: 30,
        paddingRight: 10
    },
    plants:{
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center'
    },
    plantList:{}

})

export default style;