import React, { useState } from 'react'
import { AddProduct } from './AddProduct'
import { Orders } from './Orders'
import { View } from 'react-native'


export const AdminPanel = () => {
    

  return (
    <View>
      <AddProduct/>
      <Orders/>
    </View>
    
  )
}
