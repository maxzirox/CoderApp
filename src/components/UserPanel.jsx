import { Avatar, ListItem } from '@react-native-material/core'
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../themes/appTheme'
import { useSelector } from 'react-redux'
import { collection, getDocs } from 'firebase/firestore'
import dataBase from '../utils/firebase'
import { ImagesPicker } from './ImagesPicker'


export const UserPanel = ({navigation}) => {
  const userID = useSelector(state => state.auth.userId)
  const [user, setUser] = useState([]);
  const userData = useSelector( state => state.auth.data)

  return (
    <View style={ styles.globalMargin }>
        <Avatar style={{ alignSelf: 'center', marginVertical: 10}} image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
        <Text style={{ alignSelf: 'center', marginVertical: 10 }}>{userData.map(item => item.email)}</Text>
        <ImagesPicker/>
        <ListItem title="Informacion Personal" />
        <ListItem title="Historial de pedidos" />
        <ListItem title="Mis Direcciones" onPress={() => navigation.navigate('Direcciones')}/>
        <ListItem title='Cambiar contraseña' />
        
    </View>
  )
}
