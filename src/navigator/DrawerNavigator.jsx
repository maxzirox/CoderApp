import react from 'react';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { AdminScreen } from '../screens/AdminScreen';
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { UserPanel } from '../components/UserPanel';
import { DetailScreen } from '../screens/DetailScreen';
import { BottomNavigator } from './BottomNavigator';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from '../themes/appTheme';



const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (

    <Drawer.Navigator
    drawerContent={(props) => <InternalMenu {...props} />}
    >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Productos" component={BottomNavigator} />
        <Drawer.Screen name="Admin" component={AdminScreen} />
        <Drawer.Screen name="Perfil" component={UserPanel} />
        <Drawer.Screen name="Detalle" component={DetailScreen} />
        {/*<Drawer.Screen name="Productos" component={BottomNavigator}/>*/}
    </Drawer.Navigator>
  );
}

const InternalMenu = ({ navigation }) => {
  const buttons = ['Home', 'Productos', 'Admin', 'Perfil']
  return(
    <DrawerContentScrollView>
      <View style={styles.avatarContainer }>
        <Image 
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
          }}
          style={ styles.avatar }
        />
      </View>

      <View style={ styles.drawerMenu}>
        {
          buttons.map((nameBtn) => {
            return(
              <TouchableOpacity
                style={styles.buttonMenu}
                key={nameBtn}
                onPress={ () => navigation.navigate(nameBtn)} 
              >
                <Text style={ styles.textMenu}>{nameBtn}</Text>
              </TouchableOpacity> 
            )
          })
          
        }
      </View>
    </DrawerContentScrollView>
    
  );
}