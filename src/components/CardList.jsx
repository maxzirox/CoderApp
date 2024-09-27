import React, { useEffect } from 'react';
import { Button } from "@react-native-material/core";
import { Dimensions, View, Text, Image } from 'react-native';
import { styles } from '../themes/appTheme';
import Carousel from 'react-native-reanimated-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { filterProduct, getProduct, selectProduct } from '../store/actions/product.action';

export const CardList = ({ navigation }) => {
    const width = Dimensions.get('window').width;   
    const dispatch = useDispatch();
    const productos = useSelector(state => state.products.products);

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    const onHandleSelectedProduct = (item) => {
        dispatch(selectProduct(item));
        navigation.navigate('Detalle', { name: item.titulo });
    };

    return (
        <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
            <Carousel
                loop
                width={width}
                height={width * 2}
                data={productos}
                renderItem={({ item, index }) => (
                    <View key={index} style={{ margin: 50 }}>
                        <Image 
                            source={{ uri: item.imagen && item.imagen.trim() ? item.imagen : undefined }} 
                            style={{ width: 280, height: 280 }} 
                        />       
                        <Text style={styles.globalText}>{item.titulo}</Text>
                        <Button  
                            title='Detalles'
                            onPress={() => onHandleSelectedProduct(item)}
                        /> 
                    </View>
                )}
            />
        </View>
    );
};
