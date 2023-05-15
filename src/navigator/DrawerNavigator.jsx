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
import { PlacesScreen } from '../screens/PlacesScreen';
import { useDispatch, useSelector } from 'react-redux';
import { UserInfoScreen } from '../screens/UserInfoScreen';
import { useEffect } from 'react';
import { getInfo } from '../store/actions/user.action';



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
        <Drawer.Screen name="Direcciones" component={PlacesScreen} />
        <Drawer.Screen name="Informacion" component={UserInfoScreen} />
        {/*<Drawer.Screen name="Productos" component={BottomNavigator}/>*/}
    </Drawer.Navigator>
  );
}

const InternalMenu = ({ navigation }) => {
  const dispatch = useDispatch()
  const userId = useSelector(state=> state.auth.userId)
  const userData = useSelector(state => state.user.data)
  const isAdmin = userData.map(item => item.isAdmin)
  const buttons = ['Home', 'Productos', 'Admin', 'Perfil']

  const image = userData.map(item => item.imagen)

  useEffect(()=>{
    dispatch(getInfo(userId))
  }, [])
  return(
    <DrawerContentScrollView>
      <View style={styles.avatarContainer }>
        <Image 
          source={{
            uri: `${image}`
          }}
          style={ styles.avatar }
        />
      </View>

      <View style={ styles.drawerMenu}>
        {
          buttons.map((nameBtn) => {
            if(isAdmin[0] === false && nameBtn !== 'Admin'){
              return(
                <TouchableOpacity
                  style={styles.buttonMenu}
                  key={nameBtn}
                  onPress={ () => navigation.navigate(nameBtn)} 
                >
                  <Text style={ styles.textMenu}>{nameBtn}</Text>
                </TouchableOpacity> 
              )
            }if(isAdmin[0] === true){
              return(
                <TouchableOpacity
                  style={styles.buttonMenu}
                  key={nameBtn}
                  onPress={ () => navigation.navigate(nameBtn)} 
                >
                  <Text style={ styles.textMenu}>{nameBtn}</Text>
                </TouchableOpacity> 
              )
            }
         
          })
          
        }
      </View>
    </DrawerContentScrollView>
    
  );
}