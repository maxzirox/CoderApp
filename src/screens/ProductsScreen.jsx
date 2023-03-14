import React from 'react'
import { Text, View, Button } from 'react-native'
import { CardList } from '../components/CardList'
import { styles } from '../themes/appTheme'


export const ProductsScreen = () => {
  return (
    <View>
    <Text style={ styles.globalText }>Productos</Text>
    <CardList/>
    </View>
  )
}
