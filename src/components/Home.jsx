import { Button, Pressable } from '@react-native-material/core'
import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../themes/appTheme'
import { CardList } from './CardList'
import { ScrollView } from 'react-native-gesture-handler'

export const Home = ({ navigation, products}) => {

  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center' }}>
        <Pressable onPress={ () => { navigation.navigate('Productos')}} style={ [styles.pressableHome, {backgroundColor: '#522b5b'}] }>
            <Text style={ styles.pressableText }>Productos</Text>
        </Pressable>
        <Pressable style={[styles.pressableHome, {backgroundColor: '#854f6c'} ]} onPress={ ()=> {navigation.navigate('Services')}} >
            <Text>Servicios</Text>
        </Pressable>
        <Pressable style={[ styles.pressableHome, {backgroundColor: '#dfb6b2'} ]} />
        <Pressable style={[ styles.pressableHome, {backgroundColor: '#fbe4d8'} ]} />
      </View>
      <View style={{ justifyContent: 'center'}}>
          <CardList navigation={navigation} products={products}/>
      </View>
    </ScrollView>

  )
}
