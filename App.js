import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthNavigator } from './src/navigator/AuthNavigator';
import store from './src/store';
import { Provider } from 'react-redux';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <Provider store={store} >
    <NavigationContainer>
        {user
            ? <DrawerNavigator/>
            : <AuthNavigator />
        }
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
