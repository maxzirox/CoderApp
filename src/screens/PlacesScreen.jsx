import React, { useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import { styles } from "../themes/appTheme";
import { Button, Divider, List, TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import dataBase from "../utils/firebase";
import { ListItem } from "@react-native-material/core";
import { addPlace } from "../store/actions/user.action";

export const PlacesScreen = () => {
    const dispatch = useDispatch();
    const userData = useSelector( state => state.user.data)
    const userID = useSelector( state => state.user.userId)
    const authId = useSelector(state => state.auth.userId)
    const [address, setAddress] = useState('')
    const [user, setUser] = useState('')
    const onHandlerPress = () =>{
        //console.log('userId desde placesScreen: ',userID)
        dispatch(addPlace(address, userID, authId))
    }

    return(
        
        <View style={styles.globalMargin}>
            <View style={{alignSelf: 'center'}}>
                <Text style={{ marginTop: 30, fontSize: 25, marginBottom: 16, color: 'aliceblue', textAlign: 'center'}}>Agregar direccion</Text>
                <TextInput 
                    style={{marginVertical: 20, width: 300}}  
                    label='Nueva direccion'
                    autoCapitalize="none"
                    onChangeText={(value) => setAddress(value)}
                    value={address}
                />
                <Button icon="plus" style={[styles.buttonMenu, {alignSelf: 'center', marginBottom: 20}]} onPress={()=>{onHandlerPress()}}>
                    <Text style={{color: 'aliceblue'}}>Agregar</Text>
                </Button>
            </View>

            <ScrollView>
                {userData.map(item => item.address.map((address) =>{
                    return(
                        <View>
                            <List.Item
                            title={address}
                            key={address}
                            description="Direccion"
                            left={props => <List.Icon {...props} icon="home" color='aliceblue' />}
                            titleStyle={{color: 'aliceblue', fontSize: 20}}
                            descriptionStyle={{color: '#FBE4D8', fontSize: 11}}
                            style={{backgroundColor: '#2B124C'}}
                            />
                            <Divider/>
                        </View>
                )}) )}
            </ScrollView>
        </View>
       
    )
}