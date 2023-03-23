import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    globalText: {
        textAlign: 'center',
        alignSelf: 'center', 
        fontSize: 40
    },
    pressableHome: {
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 10,
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.9,  
        shadowRadius: 5, 
        borderColor: '#ccc'
    } ,
    pressableText: {
        fontSize: 30,
        color: 'aliceblue',
        alignSelf: 'center',
    },
})