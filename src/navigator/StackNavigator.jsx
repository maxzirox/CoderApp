import react from 'react';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { ProductsScreen } from '../screens/ProductsScreen';
import { AdminScreen } from '../screens/AdminScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserPanel } from '../components/UserPanel';


const Drawer = createDrawerNavigator();

export const StackNavigator = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Productos" component={ProductsScreen} />
        <Drawer.Screen name="Admin" component={AdminScreen} />
        <Drawer.Screen name="Perfil" component={UserPanel} />
    </Drawer.Navigator>
    
  );
}