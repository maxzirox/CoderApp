import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import store from './src/store';
import { Provider } from 'react-redux';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';

export default function App() {
  return (
    <Provider store={store} >
    <NavigationContainer>
      <DrawerNavigator/>
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
