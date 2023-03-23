import React, { useState } from 'react'
import { Button } from "@react-native-material/core";
import { Dimensions,View, Text, Image } from 'react-native'
import { styles } from '../themes/appTheme'
import Carousel from 'react-native-reanimated-carousel';
import { useProducts } from './useProducts';


export const CardList = () => {

    const [detail, setDetail] = useState(true)
    const width = Dimensions.get('window').width;
    const products = useProducts()     

  return (
    <View style={{alignSelf: 'center'}}>
        <Carousel
            loop
            width={width}
            height={width*2}
            data={products}
            renderItem={({item, index}) => (
                <View style={{ margin: 50}}>
                    {detail ? 
                <View key={index} >
                <Image 
                source={{uri: item.imagen}}
                style={{width: 300, height: 300}} 
                />       
                <Text style={ styles.globalText}>{item.titulo}</Text>
                <Button  
                        title= 'Detalles'
                        onPress={()=>setDetail(false)}
                        /> 
                    </View>
                    : 
                    <View>
                        <Text style={styles.globalText}>{item.titulo}</Text>
                        <Image 
                        source={{uri: item.imagen}}
                        style={{width: 300, height: 300}} 
                        />
                        <Text style={{ textAlign: 'center', alignSelf: 'center', fontSize: 20}}>
                            Descripcion: {item.descripcion}
                        </Text>
                        <Text style={{textAlign: 'center', alignSelf: 'center', fontSize: 20}}>
                            ${item.precio}
                        </Text>
                        <Button  
                        title= 'Volver'
                        onPress={()=>setDetail(true)}
                        /> 
                    </View>}
                </View>
            )}
            
        />
    </View>

  )
}
