import React from 'react'
import { Text, View } from 'react-native'
import { Cart } from '../components/Cart'
import { styles } from '../themes/appTheme'


export const CartScreen = ({ navigation }) => {
  return (
    <View style={styles.globalMargin}>
        <Cart navigation={navigation}/>
    </View>
  )
}
