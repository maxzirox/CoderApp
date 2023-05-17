import { Avatar } from '@react-native-material/core'
import React from 'react'
import { Text, View } from 'react-native'
import { AdminPanel } from '../components/AdminPanel'
import { useSelector } from 'react-redux'
import { styles } from '../themes/appTheme'

export const AdminScreen = () => {
  const userData = useSelector(state => state.user.data);

  const image = userData.map(item => item.imagen)
  return (
    <View style={styles.globalMargin}>
    <Avatar style={{ alignSelf: 'center', marginVertical: 10}} image={{ uri: `${image}` }} />
    <Text style={{ alignSelf: 'center', marginVertical: 10, color: 'aliceblue' }}>{userData.map(user => user.name)}</Text>
    <AdminPanel/>
    </View>
  )
}
