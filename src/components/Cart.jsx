import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../store/actions/cart.action';
import { styles } from '../themes/appTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { confirmCart } from '../store/actions/cart.action';
export const Cart = () => {
  const dispatch = useDispatch();

  //con selector seleccionamos el estado de nuestro cartReducer
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);
  //recibimos el id en nuestra funcion y disparamos la accion de remover item
    const handlerDeleteItem = (id) => dispatch(removeItem(id));
    const handlerConfirmCart = () => dispatch(confirmCart(items, total));

  const CardCart = ({item}) => {
    return(
    <View style={styles.cartCard}>
      <Image 
        source={{uri: item.imagen}}
        style={{width: 50, height: 50, marginHorizontal: 10}} 
        alt='imagen'
      />
      <View style={{flexDirection: 'column', alignSelf: 'center', marginHorizontal: 10}}>
        <Text style={{textAlign: 'center', alignSelf: 'center', fontSize: 15, color: 'aliceblue'}}>
          {item.titulo}
        </Text>
        <Text style={{textAlign: 'center', alignSelf: 'center', fontSize: 15, marginHorizontal: 10, color: 'aliceblue'}}>
          $ {item.precio}
        </Text>
      </View>
      <Text style={{textAlign: 'center', alignSelf: 'center', fontSize: 15, marginHorizontal: 10, color: 'aliceblue'}}>
        x {item.quantity}
      </Text>
        <Text style={{textAlign: 'center', alignSelf: 'center', fontSize: 15, marginHorizontal: 10, color: 'aliceblue'}}>
          ${item.quantity * item.precio}
        </Text>
        <TouchableOpacity >
          <MaterialCommunityIcons onPress={() => handlerDeleteItem(item.id)} name="delete" size={25} style={{alignSelf:'center', color: 'aliceblue'}} />
        </TouchableOpacity>
    </View>
  )}
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({item}) => ( 
          <CardCart item={item}/> 
          )}
        keyExtractor={item => item.id}
      />
      <View style={styles.cartTotal}>
          <Text> productos: {items.length}</Text>
          <Text> Total: {total}</Text>
          <TouchableOpacity>
            <Text onPress={()=>handlerConfirmCart()} >Continuar</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}