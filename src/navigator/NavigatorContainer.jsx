import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { DrawerNavigator } from './DrawerNavigator'
import { AuthNavigator } from './AuthNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export const NavigatorContainer = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.userId);
    useEffect(()=>{
      dispatch()
    })
  return (
    
    <NavigationContainer>
    {userId
        ? <DrawerNavigator/>
        : <AuthNavigator />
    }
    </NavigationContainer>
  )
}
