import React from 'react'
import { Image, Text, View } from 'react-native'
import { Home } from '../components/Home'
import { styles } from '../themes/appTheme'
import { useSelector } from 'react-redux'

export const HomeScreen = ({ navigation }) => {
  const products = useSelector(state => state.products.products)
  return (
    <View style={{ backgroundColor: '#190019' }}>
    <Image style={{width: 210, height: 120, alignSelf: 'center', marginVertical: 30}} source={{ uri:'https://firebasestorage.googleapis.com/v0/b/wellnesgym-47cea.appspot.com/o/logos%2Flogo-kpc3.png?alt=media&token=e5666ce9-d91d-4a3b-92d5-5cfa9294b083'}} />
    <Home navigation={navigation} products={products}/>
    </View>
  )
}
