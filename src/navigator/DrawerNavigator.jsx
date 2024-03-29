import react from 'react';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { AdminScreen } from '../screens/AdminScreen';
import { AuthScreen } from '../screens/AuthScreen';
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
import { getInfo, getOrders } from '../store/actions/user.action';
import { OrdersScreen } from '../screens/OrdersScreen';
import { UserScreen } from '../screens/UserScreen';
import { logOut } from '../store/actions/auth.action';
import { PasswordChangeScreen } from '../screens/PasswordChangeScreen';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { ServicesScreen } from '../screens/ServicesScreen';



const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const userId = useSelector(state=> state.auth.userId)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getInfo(userId))
  }, [])

  return (

    <Drawer.Navigator
    drawerContent={(props) => <InternalMenu {...props} />}
    >
        <Drawer.Screen name="Home"  options={{ headerStyle: {backgroundColor: '#2B124C'}, headerTitleStyle: {color: 'aliceblue'} }} component={HomeScreen} />
        <Drawer.Screen name="Productos" options={{ headerStyle: {backgroundColor: '#2B124C'}, headerTitleStyle: {color: 'aliceblue'} }} component={BottomNavigator} />
        <Drawer.Screen name="Admin" options={{ headerStyle: {backgroundColor: '#2B124C'}, headerTitleStyle: {color: 'aliceblue'} }}  component={AdminScreen} /> 
        <Drawer.Screen name="Perfil" options={{ headerStyle: {backgroundColor: '#2B124C'}, headerTitleStyle: {color: 'aliceblue'} }}  component={UserScreen} />
        <Drawer.Screen name="Detalle" options={{ headerStyle: {backgroundColor: '#2B124C'}, headerTitleStyle: {color: 'aliceblue'} }}  component={DetailScreen} />
        <Drawer.Screen name="Direcciones" options={{ headerStyle: {backgroundColor: '#2B124C'}, headerTitleStyle: {color: 'aliceblue'} }}  component={PlacesScreen} />
        <Drawer.Screen name="Informacion" options={{ headerStyle: {backgroundColor: '#2B124C'}, headerTitleStyle: {color: 'aliceblue'} }}  component={UserInfoScreen} />
        <Drawer.Screen name="Ordenes" options={{ headerStyle: {backgroundColor: '#2B124C'}, headerTitleStyle: {color: 'aliceblue'} }}  component={OrdersScreen} />
        <Drawer.Screen name="Contraseña" options={{ headerStyle: {backgroundColor: '#2B124C'}, headerTitleStyle: {color: 'aliceblue'} }}  component={PasswordChangeScreen} />
        <Drawer.Screen name="Services" options={{ headerStyle: {backgroundColor: '#2B124C'}, headerTitleStyle: {color: 'aliceblue'} }}  component={ServicesScreen} />
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
  const imagen = userData.map(item => item.imagen)
  //console.log('userData desde drawer: ', userData[0].imagen)


  return(
    <DrawerContentScrollView style={styles.globalMargin}>
      
      <View style={styles.avatarContainer }>
          <Image 
          source={{
            uri: `${imagen}`
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
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={ () => {
            dispatch(logOut(userId))
          }} 
        >
        <Text style={ styles.textMenu}>Log Out</Text>
        </TouchableOpacity>
      </View>

            
    </DrawerContentScrollView>
    
  );
}