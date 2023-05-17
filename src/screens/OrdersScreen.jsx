import React from 'react'
import { Text, View } from 'react-native'
import { UserOrders } from '../components/UserOrders'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../store/actions/user.action'
import { styles } from '../themes/appTheme'

export const OrdersScreen = () => {
    
  return (
    <View style={styles.globalMargin}>
        <UserOrders />
    </View>
  )
}
