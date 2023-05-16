import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../themes/appTheme';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrders } from '../store/actions/user.action';

export const UserOrders = () => {

    const userOrders = useSelector(state => state.user.orders)
    


    console.log('ordenes desde userOrder: ', userOrders.map(item => item))
    const CardCart = ({item}) => {
        return(
        <View style={styles.cartCard}>
          <View style={{flexDirection: 'column', alignSelf: 'center', marginHorizontal: 10}}>
            <Text style={{textAlign: 'center', alignSelf: 'center', fontSize: 15, color: 'aliceblue'}}>
              {item.Cliente}
            </Text>
            <Text style={{textAlign: 'center', alignSelf: 'center', fontSize: 15, marginHorizontal: 10, color: 'aliceblue'}}>
              $ {item.Productos}
            </Text>
          </View>
          <Text style={{textAlign: 'center', alignSelf: 'center', fontSize: 15, marginHorizontal: 10, color: 'aliceblue'}}>
            x {item.Total}
          </Text>


        </View>
      )}
      return (
        <View>
          <FlatList
            data={userOrders}
            renderItem={({item}) => ( 
              <CardCart item={item}/> 
              )}
            keyExtractor={item => item}
          />
        </View>
      )
}
