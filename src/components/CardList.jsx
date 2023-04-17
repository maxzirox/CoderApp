import React, { useEffect, useState } from 'react'
import { Button } from "@react-native-material/core";
import { Dimensions,View, Text, Image } from 'react-native'
import { styles } from '../themes/appTheme'
import Carousel from 'react-native-reanimated-carousel';
//import { useProducts } from '../hooks/useProducts';
import { useSelector, useDispatch } from 'react-redux';
import { filterProduct, selectProduct } from '../store/actions/product.action';


export const CardList = ({ navigation}) => {

    const width = Dimensions.get('window').width;   
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products)
    //console.log('data desde cardlist: ', products)
    useEffect(()=>{
        dispatch(filterProduct(products.id))
    },[])

    const onHandleSelectedProduct = (item) =>{
        dispatch(selectProduct(item.id));
        console.log('producto desde handle: ',item)
        navigation.navigate('Detalle', {name:  item.titulo})
    }
  return (
    <View style={{alignSelf: 'center'}}>
        <Carousel
            loop
            width={width}
            height={width*2}
            data={products}
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
