import React from 'react'
import { Text, View } from 'react-native'
import { UserInfo } from '../components/UserInfo'

export const UserInfoScreen = () => {
  return (
    <View style={{backgroundColor: '#190019', height: '100%'}}>
        <UserInfo/>
    </View>
  )
}
