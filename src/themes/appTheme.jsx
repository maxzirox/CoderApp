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
    avatarContainer:{
        alignItems: 'center'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    drawerMenu: {
        alignItems: 'center',
        marginVertical: 20,

    },
    textMenu: {
        fontSize: 20,
        color: 'aliceblue',
        padding: 6
    },
    buttonMenu: {
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'purple',
        borderRadius: 20,
        marginVertical: 5,
        width: 130, 
        height: 40
    }
})