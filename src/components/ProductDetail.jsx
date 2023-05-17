import { Button } from '@react-native-material/core';
import React, { useEffect } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from '../themes/appTheme';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/actions/cart.action';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const ProductDetail = ({ navigation }) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.selected);


    useEffect(() => {
        navigation.setOptions({
          title: product.categoria
        })

      }, [navigation.setOptions({
        title: product.categoria
      })])
    //disparamos la accion de agregar item y le asignamos el producto
    const handlerAddItemCart = () => dispatch(addItem(product))


  return (
    <ScrollView style={[styles.globalMargin, {flex: 1}]}>
      <View style={{paddingVertical: 40}}>
        <Text style={styles.globalText}>{product.titulo}</Text>
            <Image 
                source={{uri: product.imagen}}
                style={{width: 300, height: 300, alignSelf: 'center'}} 
            />
        <Text style={{ textAlign: 'center', fontSize: 40, color: 'aliceblue'}}>
            Descripcion
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 20, color: 'aliceblue'}}>
        {product.descripcion}
        </Text>
        <Text style={{textAlign: 'center', fontSize: 40, color: 'aliceblue', marginVertical: 20}}>
            ${product.precio}
        </Text>
        <TouchableOpacity 
            onPress={handlerAddItemCart}
            style={styles.btnDetail}
        > 
          <Text style={{textAlign: 'center', alignSelf: 'center', fontSize: 30, color: 'aliceblue'}}>
              Agregar <MaterialCommunityIcons name="cart-plus" size={25}  style={{alignSelf:'center', color: 'aliceblue'}} />
          </Text>
          
        </TouchableOpacity>
        <TouchableOpacity  
            onPress={ () => { navigation.navigate('Catalogo')}}
            style={styles.btnDetail}
        > 
          <Text style={{textAlign: 'center', alignSelf: 'center', fontSize: 30, color: 'aliceblue'}}>
              Volver 
          </Text>
        </TouchableOpacity>
      </View>    
      </ScrollView>     
    
  )
}
