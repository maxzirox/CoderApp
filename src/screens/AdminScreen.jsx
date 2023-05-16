import { Avatar } from '@react-native-material/core'
import React from 'react'
import { Text, View } from 'react-native'
import { AdminPanel } from '../components/AdminPanel'
import { useSelector } from 'react-redux'

export const AdminScreen = () => {
  const userData = useSelector(state => state.user.data);

  const image = userData.map(item => item.imagen)
  return (
    <View>
    <Avatar style={{ alignSelf: 'center', marginVertical: 10}} image={{ uri: `${image}` }} />
    <Text style={{ alignSelf: 'center', marginVertical: 10 }}>{userData.map(user => user.name)}</Text>
    <AdminPanel/>
    </View>
  )
}
