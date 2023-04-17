import React from 'react'
import { ProductDetail } from '../components/ProductDetail'
import { useSelector } from 'react-redux'



export const DetailScreen = ({ route, navigation }) => {
    const params = route.params
  return (
    <ProductDetail navigation={navigation}/>
  )
}
