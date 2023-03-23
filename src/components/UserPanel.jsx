import { Avatar, ListItem } from '@react-native-material/core'
import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../themes/appTheme'

export const UserPanel = () => {
  return (
    <View style={ styles.globalMargin }>
        <Avatar style={{ alignSelf: 'center', marginVertical: 10}} image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
        <Text style={{ alignSelf: 'center', marginVertical: 10 }}>@UserName</Text>
        <ListItem title="Informacion Personal" />
        <ListItem title="Historial de pedidos" />
        <ListItem title="Mis Direcciones" />
        <ListItem title='Cambiar contraseña' />
    </View>
  )
}
