import React, { useEffect, useState } from 'react'
import { Button } from "@react-native-material/core";
import { Dimensions,View, Text, Image } from 'react-native'
import { styles } from '../themes/appTheme'
import Carousel from 'react-native-reanimated-carousel';
//import { useProducts } from '../hooks/useProducts';
import { useSelector, useDispatch } from 'react-redux';
import { filterProduct, selectProduct, getProduct } from '../store/actions/product.action';
import { useProducts } from '../hooks/useProducts';


export const CardList = ({ navigation}) => {

    const width = Dimensions.get('window').width;   
    const dispatch = useDispatch();
    const productos = useSelector(state => state.products.products)
    //console.log('data desde cardlist: ', products)
    useEffect(()=>{
        dispatch(getProduct()) 
        dispatch(filterProduct(productos.id))
    },[])

    const onHandleSelectedProduct = (item) =>{
        dispatch(selectProduct(item.id));
        console.log('producto desde handle: ',item)
        navigation.navigate('Detalle', {name:  item.titulo})
    }
  return (
    <View style={{alignSelf: 'center', justifyContent: 'center'}}>
        <Carousel
            loop
            width={width}
            height={width*2}
            data={productos}
            renderItem={({item, index}) => (
                <View style={{ margin: 50}}>
                    <View key={index} >
                        <Image 
                            source={{uri: item.imagen}}
                            style={{width: 300, height: 300}} 
                        />       
                        <Text style={ styles.globalText}>{item.titulo}</Text>
                        <Button  
                            title= 'Detalles'
                            onPress={ ()=>onHandleSelectedProduct(item) }
                        /> 
                    </View>
                </View>
            )}
            
        />
    </View>

  )
}
