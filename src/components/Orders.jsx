import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../themes/appTheme';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrders } from '../store/actions/user.action';
import { Button, Switch } from 'react-native-paper';
import { useState } from 'react';

export const Orders = () => {
    const userId = useSelector(state=> state.auth.userId)
    const dispatch = useDispatch();
    const [check, setCheck] = useState(false)
    const [checked, setChecked] = useState(false);
    useEffect(()=>{
      dispatch(getOrders(userId))
      setCheck(false)
    }, [check])
    const userOrders = useSelector(state => state.user.orders)
  
    const CardOrder = ({item}) => {
      return(
        <View style={styles.cartOrders}>
          <View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={{textAlign: 'center', fontSize: 15, color: 'aliceblue'}}>Orden:</Text>
                <Text style={{textAlign: 'center', fontSize: 15, color: 'aliceblue'}}>
                {item.id}
                </Text>
            </View>
            <Text style={{textAlign: 'center', fontSize: 13, color: 'aliceblue'}}>
              {item.date}
            </Text>
          </View>
          <View style={{flexDirection: 'column', alignSelf: 'center', marginHorizontal: 10}}>
            <Text style={{textAlign: 'center', fontSize: 20, color: 'aliceblue'}}>
              productos:
            </Text>
               {item.Products.map(product => {
                return(
                  <Text key={product.id} style={{textAlign: 'center', alignSelf: 'center', fontSize: 15, marginHorizontal: 10, color: 'aliceblue'}}>
                    {product.titulo}
                  </Text>
                )
              })}
          </View>
          <Text style={{textAlign: 'center', alignSelf: 'center', fontSize: 15, marginHorizontal: 10, color: 'aliceblue'}}>
            Total: {item.Total}
          </Text>
        </View>
      )
    }
      return (
        <View>
            <View
                style={{ display: 'flex', height: 50, backgroundColor: '#522B5B', alignContent: 'space-between'}}
            >
                <Text style={{  color: 'aliceblue', fontSize: 25, textAlign: 'center', alignContent: 'space-between', alignSelf: 'center', }}>
                    Ver ordenes
                    <Switch value={checked} onValueChange={() => setChecked(!checked)} />
                </Text>
            </View>
            
            { checked ? 
            <View>
                <FlatList
                    data={userOrders}
                    renderItem={({item}) => ( 
                    <CardOrder item={item} key={item.id}/> 
                    )}
                    
                />
                <Button mode='outlined' onPress={()=>setCheck(true)}>
                    <Text>Actualizar</Text>
                </Button>
            </View>
                : 
                <View>
                </View>
            }
        </View>
      )
}
