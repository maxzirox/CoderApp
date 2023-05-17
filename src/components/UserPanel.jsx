import { Avatar, Icon, ListItem } from '@react-native-material/core'
import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from '../themes/appTheme'
import { useSelector } from 'react-redux'
import { collection, getDocs } from 'firebase/firestore'
import dataBase from '../utils/firebase'
import { ImagesPicker } from './ImagesPicker'
import { Divider, List } from 'react-native-paper'


export const UserPanel = ({navigation}) => {
  //const userID = useSelector(state => state.auth.userId)
  //const [user, setUser] = useState([]);
  //const userData = useSelector( state => state.user.data)
  //const image = userData.map(item => item.imagen)


  return (
    <View style={ [styles.globalMargin, { height: '100%'} ]}>
        <ImagesPicker/>
        <List.Item
          title="Información Personal"
          description="Editar informacion personal"
          left={props => <List.Icon {...props} icon="account" color='aliceblue' />}
          titleStyle={{color: 'aliceblue', fontSize: 20}}
          descriptionStyle={{color: '#FBE4D8', fontSize: 11}}
          onPress={() => navigation.navigate('Informacion')}
          style={{backgroundColor: '#2B124C'}}
        />
        <Divider/>
        <List.Item
          title="Historial de pedidos"
          description="ver historial de pedidos"
          left={props => <List.Icon {...props} icon="cart" color='aliceblue' />}
          titleStyle={{color: 'aliceblue', fontSize: 20}}
          descriptionStyle={{color: '#FBE4D8', fontSize: 11}}
          onPress={() => navigation.navigate('Ordenes')}
          style={{backgroundColor: '#2B124C'}}
        />
        <Divider/>
        <List.Item
          title="Mis direcciones"
          description="Lista de direcciones"
          left={props => <List.Icon {...props} icon="pencil" color='aliceblue' />}
          titleStyle={{color: 'aliceblue', fontSize: 20}}
          descriptionStyle={{color: '#FBE4D8', fontSize: 11}}
          onPress={() => navigation.navigate('Direcciones')}
          style={{backgroundColor: '#2B124C'}}
        />
        <Divider/>
        <List.Item
          title="Contrasña"
          description="cambiar contraseña"
          left={props => <List.Icon {...props} icon="key" color='aliceblue' />}
          titleStyle={{color: 'aliceblue', fontSize: 20}}
          descriptionStyle={{color: '#FBE4D8', fontSize: 11}}
          onPress={() => navigation.navigate('Ordenes')}
          style={{backgroundColor: '#2B124C'}}
        />

        
    </View>
  )
}
