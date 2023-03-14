import React, { useEffect, useState } from 'react'
import { Button } from "@react-native-material/core";
import { View, Text, Image } from 'react-native'
import { collection, getDocs } from 'firebase/firestore'
import dataBase from '../utils/firebase'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../themes/appTheme'


export const CardList = () => {
    const [products, setProducts] = useState([])
    const [detail, setDetail] = useState(true)
            
    const getProducts = async () => {

        const productSnapshot = await getDocs(collection(dataBase, 'productos'))
        const productList = productSnapshot.docs.map((item) => {
            let product = item.data()
            product.id = item.id
            return product
        })
        return productList
    }

    useEffect( () => {
       getProducts()
       .then( (response) => {
       setProducts(response)
       setDetail(true)
       })
    }, [])

  return (
    <View style={{alignSelf: 'center'}}>
        <FlatList 
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
