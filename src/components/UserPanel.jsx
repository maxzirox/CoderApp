import { Avatar, ListItem } from '@react-native-material/core'
import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from '../themes/appTheme'
import { useSelector } from 'react-redux'
import { collection, getDocs } from 'firebase/firestore'
import dataBase from '../utils/firebase'
import { ImagesPicker } from './ImagesPicker'


export const UserPanel = ({navigation}) => {
  //const userID = useSelector(state => state.auth.userId)
  //const [user, setUser] = useState([]);
  //const userData = useSelector( state => state.user.data)
  //const image = userData.map(item => item.imagen)


  return (
    <View style={ styles.globalMargin }>
        <ImagesPicker/>
        <ListItem title="Informacion Personal" onPress={() => navigation.navigate('Informacion')} />
        <ListItem title="Historial de pedidos" onPress={() => navigation.navigate('Ordenes')}/>
        <ListItem title="Mis Direcciones" onPress={() => navigation.navigate('Direcciones')}/>
        <ListItem title='Cambiar contraseña' />
        
    </View>
  )
}
