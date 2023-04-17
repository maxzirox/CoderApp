import React from 'react'
import { Text, View, Button, FlatList } from 'react-native'
import { CardList } from '../components/CardList'
import { styles } from '../themes/appTheme'
import { useSelector } from 'react-redux'


export const ProductsScreen = ({navigation}) => {

  //const products = useSelector(state => state.products.products)
  //console.log("productos desde producScreen: ", products)
  return (
    <View>
    <Text style={ styles.globalText }>Productos</Text>
    <CardList navigation={navigation} /> 
    </View>
  )
}
