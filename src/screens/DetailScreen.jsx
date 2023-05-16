import React from 'react'
import { ProductDetail } from '../components/ProductDetail'
import { useSelector } from 'react-redux'
import { styles } from '../themes/appTheme'
import { View } from 'react-native'



export const DetailScreen = ({ route, navigation }) => {
    const params = route.params
  return (

      <ProductDetail navigation={navigation}/>

  )
}
