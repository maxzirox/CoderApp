import { Avatar } from '@react-native-material/core'
import React from 'react'
import { View, Text } from 'react-native'
import { UserPanel } from '../components/UserPanel'

export const UserCreen = () => {
  return (
    <View>
        <Avatar style={{ alignSelf: 'center', marginVertical: 10}} image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
        <Text style={{ alignSelf: 'center', marginVertical: 10 }}>@Usuario Admin</Text>
        <UserPanel/>
    </View>
  )
}
