import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { DrawerNavigator } from './DrawerNavigator'
import { AuthNavigator } from './AuthNavigator'
import { useSelector } from 'react-redux'


export const NavigatorContainer = () => {

    const token = useSelector(state => state.auth.token);

  return (
    
    <NavigationContainer>
    {token
        ? <DrawerNavigator/>
        : <AuthNavigator />
    }
    </NavigationContainer>
  )
}
