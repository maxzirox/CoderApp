import React from 'react'
import { Text, View } from 'react-native'
import { UserInfo } from '../components/UserInfo'

export const UserInfoScreen = () => {
  return (
    <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <UserInfo/>
    </View>
  )
}
