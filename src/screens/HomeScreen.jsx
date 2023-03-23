import React from 'react'
import { Text, View } from 'react-native'
import { Home } from '../components/Home'
import { styles } from '../themes/appTheme'

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={ styles.globalMargin }>
    <Text style={ styles.globalText }>LOGO</Text>
    <Home navigation={navigation}/>
    </View>
  )
}
