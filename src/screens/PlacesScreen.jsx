import React, { useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import { styles } from "../themes/appTheme";
import { Button, TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { addPlace } from "../store/actions/places.action";
import { useState } from "react";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import dataBase from "../utils/firebase";
import { ListItem } from "@react-native-material/core";

export const PlacesScreen = () => {
    const dispatch = useDispatch();
    const userData = useSelector( state => state.auth.data)
    const userID = useSelector( state => state.auth.userId)
    const [address, setAddress] = useState('')
    const [user, setUser] = useState('')
    const onHandlerPress = () =>{
        dispatch(addPlace(address, userID))
    }

    return(
        <ScrollView>
            <View style={{flex: 1, margin: 30, alignSelf: 'center',}}>
                <Text style={{ fontSize: 18, marginBottom: 16}}>Agregar direccion</Text>
                <TextInput 
                style={styles.formInput}  
                label='Nueva direccion'
                autoCapitalize="none"
                onChangeText={(value) => setAddress(value)}
                value={address}
                />
                <Button style={styles.buttonMenu} onPress={()=>{onHandlerPress()}}>
                    <Text>Guardar</Text>
                </Button>

                {userData.map(item => item.address.map((address) =>{
                    return(
                    <ListItem title={address} key={address}/>
                )}) )}
            </View>
        </ScrollView>
    )
}