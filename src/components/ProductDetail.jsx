import { Button } from '@react-native-material/core';
import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from '../themes/appTheme';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/actions/cart.action';

export const ProductDetail = ({ navigation }) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.selected);
    const params = product;

    useEffect(() => {
        navigation.setOptions({
          title: product.titulo
        })

      }, [navigation.setOptions({
        title: product.titulo
      })])
    //disparamos la accion de agregar item y le asignamos el producto
    const handlerAddItemCart = () => dispatch(addItem(product))


  return (
    
    <View>
        <View>
        <Text style={styles.globalText}>{params.titulo}</Text>
            <Image 
                source={{uri: params.imagen}}
                style={{width: 300, height: 300}} 
            />
        <Text style={{ textAlign: 'center', alignSelf: 'center', fontSize: 20}}>
            Descripcion: {params.descripcion}
        </Text>
        <Text style={{textAlign: 'center', alignSelf: 'center', fontSize: 20}}>
            ${params.precio}
        </Text>
        <Button  
            title= 'Agregar'
            onPress={handlerAddItemCart}
        /> 
        <Button  
            title= 'Volver'
            onPress={ () => { navigation.navigate('Catalogo')}}
        /> 
        </View>         
    </View>
  )
}
