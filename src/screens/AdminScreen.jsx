import { Avatar } from '@react-native-material/core'
import React from 'react'
import { Text, View } from 'react-native'
import { AdminPanel } from '../components/AdminPanel'
import { useSelector } from 'react-redux'

export const AdminScreen = () => {
  const userData = useSelector(state => state.auth.data);

  return (
    <View>
    <Avatar style={{ alignSelf: 'center', marginVertical: 10}} image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
    <Text style={{ alignSelf: 'center', marginVertical: 10 }}>{userData.map(user => user.name)}</Text>
    <AdminPanel/>
    </View>
  )
}
