import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../store/actions/cart.action';
import { styles } from '../themes/appTheme';

export const Cart = () => {
  const dispatch = useDispatch();
  //con selector seleccionamos el estado de nuestro cartReducer
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);
  //recibimos el id en nuestra funcion y disparamos la accion de remover item
    const handlerDeleteItem = (id) => dispatch(removeItem(id));


  return (
    <View>
      <FlatList
        data={items}
        renderItem={({item}) => (<View style={{flexDirection: 'row'}}>
          <Text style={{textAlign: 'center', alignSelf: 'center', fontSize: 15}}>{item.titulo}</Text>
            <Image 
                source={{uri: item.imagen}}
                style={{width: 50, height: 50}} 
            />
        <Text style={{textAlign: 'center', alignSelf: 'center', fontSize: 15}}>
          Cantidad: {item.quantity}
        </Text>
        <Text style={{textAlign: 'center', alignSelf: 'center', fontSize: 15}}>
          Total: {item.quantity * item.precio}
        </Text>
        </View>)}
        keyExtractor={item => item.id}
      />
    </View>
  )
}
