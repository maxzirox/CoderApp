import { Button, Pressable } from '@react-native-material/core'
import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../themes/appTheme'
import { CardList } from './CardList'
import { ScrollView } from 'react-native-gesture-handler'

export const Home = ({ navigation, products}) => {

  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center' }}>
        <Pressable onPress={ () => { navigation.navigate('Productos')}} style={ [styles.pressableHome, {backgroundColor: 'skyblue'}] }>
            <Text style={ styles.pressableText }>Productos</Text>
        </Pressable>
        <Pressable style={[styles.pressableHome, {backgroundColor: 'red'} ]} />
        <Pressable style={[ styles.pressableHome, {backgroundColor: 'pink'} ]} />
        <Pressable style={[ styles.pressableHome, {backgroundColor: 'blue'} ]} />
      </View>
      <View style={{ alignSelf: 'center'}}>
          <CardList navigation={navigation} products={products}/>
      </View>
    </ScrollView>

  )
}
