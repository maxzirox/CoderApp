import { Avatar } from '@react-native-material/core'
import React from 'react'
import { View, Text } from 'react-native'
import { UserPanel } from '../components/UserPanel'
import { styles } from '../themes/appTheme'

export const UserScreen = ({navigation}) => {
  return (
    <View>
      <UserPanel navigation={navigation}/>
    </View>
  )
}
