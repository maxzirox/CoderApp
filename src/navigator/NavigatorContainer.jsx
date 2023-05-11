import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { DrawerNavigator } from './DrawerNavigator'
import { AuthNavigator } from './AuthNavigator'
import { useSelector } from 'react-redux'

export const NavigatorContainer = () => {
    const userId = useSelector(state => state.auth.userId)
  return (
    
    <NavigationContainer>
    {userId
        ? <DrawerNavigator/>
        : <AuthNavigator />
    }
    </NavigationContainer>
  )
}
