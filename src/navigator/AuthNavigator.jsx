import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthScreen } from '../screens/AuthScreen';
import { SignIn } from '../components/SignIn';
import { RegisterForm } from '../components/RegisterForm';


const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteeName="Auth"
        screenOptions={{headerShown: false}}
    >
        <Stack.Screen name='Auth' component={AuthScreen} />
        <Stack.Screen name='Register' component={RegisterForm} />
    </Stack.Navigator>
  )
}
