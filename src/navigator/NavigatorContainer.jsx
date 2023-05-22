import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { DrawerNavigator } from './DrawerNavigator'
import { AuthNavigator } from './AuthNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export const NavigatorContainer = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    useEffect(()=>{
      //dispatch()
    })
  return (
    
    <NavigationContainer>
    {token
        ? <DrawerNavigator/>
        : <AuthNavigator />
    }
    </NavigationContainer>
  )
}
