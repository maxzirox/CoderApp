import React from 'react';
import { ProductsScreen } from '../screens/ProductsScreen';
import { CartScreen } from '../screens/CartScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

const productsIcon = <MaterialCommunityIcons name="store" size={30} color="#FBE4D8" />;
const cartIcon = <MaterialCommunityIcons name="cart" size={30} color="#FBE4D8" />;

const Tab = createMaterialBottomTabNavigator();

export function BottomNavigator() {
  return (
    <Tab.Navigator 
      activeColor="aliceblue"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#2B124C' }}
    >
      <Tab.Screen 
        name="Catalogo" 
        component={ProductsScreen} 
        options={{
          tabBarIcon: () => (
            productsIcon
            ),
          
        }}
      />
      <Tab.Screen 
        name="Carrito" 
        component={CartScreen} 
        options={{
          tabBarIcon: () => (
            cartIcon
            ),
        }}
      />
    </Tab.Navigator>
  );
}