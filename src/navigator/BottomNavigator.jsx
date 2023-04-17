import React from 'react';
import { ProductsScreen } from '../screens/ProductsScreen';
import { CartScreen } from '../screens/CartScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export function BottomNavigator() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Catalogo" component={ProductsScreen} />
      <Tab.Screen name="Carrito" icon="cart" component={CartScreen} />
    </Tab.Navigator>
  );
}