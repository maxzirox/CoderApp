import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { useState } from 'react'
import { BottomNavigator } from './BottomNavigator'
import { AuthNavigator } from './AuthNavigator';

export const IndexNavigator = () => {

    const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
        {user
            ? <BottomNavigator />
            : <AuthNavigator />
        }
    </NavigationContainer>
  )
}
