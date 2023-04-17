import React from 'react'
import { Text, View } from 'react-native'
import { Home } from '../components/Home'
import { styles } from '../themes/appTheme'
import { useSelector } from 'react-redux'

export const HomeScreen = ({ navigation }) => {
  const products = useSelector(state => state.products.products)
  return (
    <View style={ styles.globalMargin }>
    <Text style={ styles.globalText }>LOGO</Text>
    <Home navigation={navigation} products={products}/>
    </View>
  )
}
