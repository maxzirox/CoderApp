import React from 'react'
import { Text, View, Button } from 'react-native'

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
    <Text>Bienvenido a HomeScreen</Text>
    <Button title='ir a Productos' onPress={ () => { navigation.navigate('Products')}}/>
    </View>
  )
}
