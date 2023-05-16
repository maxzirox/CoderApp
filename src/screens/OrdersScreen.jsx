import React from 'react'
import { Text, View } from 'react-native'
import { UserOrders } from '../components/UserOrders'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../store/actions/user.action'

export const OrdersScreen = () => {
    
  return (
    <View>
        <UserOrders />
    </View>
  )
}
