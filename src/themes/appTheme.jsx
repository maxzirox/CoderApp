import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    globalMargin: {
        //marginHorizontal: 20,
        backgroundColor: '#190019',
        height: '100%'

    },
    globalText: {
        textAlign: 'center',
        alignSelf: 'center', 
        fontSize: 40,
        color: 'aliceblue'
    },
    pressableHome: {
        width: 140,
        height: 140,
        margin: 10,
        borderRadius: 10,
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.9,  
        shadowRadius: 5, 
        borderColor: '#ccc',

    } ,
    pressableText: {
        fontSize: 25,
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
    },
    cartCard: {
        flexDirection: 'row', 
        backgroundColor: '#2B124C', 
        height: 120, 
        borderRadius: 10, 
        marginHorizontal: 20,
        marginVertical: 5
    },
    cartTotal: {
        flexDirection: 'row',
        backgroundColor: '#2B124C', 
        height: 50, 
        borderRadius: 10, 
        marginHorizontal: 20,
        marginVertical: 5
    },
    btnDetail: {
        backgroundColor: 'purple', 
        marginHorizontal: 70, 
        marginVertical: 5,
        borderRadius: 30,
    },
    authContainer: {
        marginTop: 150,
        width: '80%',
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#2B124C',
        alignSelf: 'center',
        alignItems: 'center',
    },
    authTitle: {
        fontSize: 30,
        marginBottom: 18,
        textAlign: 'center',
        color: 'aliceblue'
    },
    authText: {
        textAlign: 'center',
        fontSize: 15,
        alignItems: 'center',
        alignContent: 'center',
        color: 'aliceblue'
    },
    promp: {
        alignItems: 'center',
    },
    prompMessage: {
        fontSize: 16,
    },
    formInput: {
        marginVertical: 5,
        width: 220
    },
    cartOrders: {
        flexDirection: 'column', 
        backgroundColor: '#2B124C', 
        height: 'auto', 
        borderRadius: 10, 
        marginHorizontal: 20,
        marginVertical: 5
    },
    
})