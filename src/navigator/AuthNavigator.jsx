import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthScreen } from '../screens/AuthScreen';


const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteeName="Auth"
        screenOptions={{headerShown: false}}
    >
        <Stack.Screen name='Auth' component={AuthScreen} />
    </Stack.Navigator>
  )
}
