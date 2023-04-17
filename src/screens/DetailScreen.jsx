import React from 'react'
import { ProductDetail } from '../components/ProductDetail'



export const DetailScreen = ({ route, navigation }) => {
    const params = route.params
  return (
    <ProductDetail navigation={navigation} route={route}/>
  )
}
