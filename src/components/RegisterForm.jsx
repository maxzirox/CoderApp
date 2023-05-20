import React from 'react'
import { Alert, KeyboardAvoidingView, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { Button, TextInput } from 'react-native-paper'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../store/actions/auth.action'


export const RegisterForm = ({navigation}) => {
    const title = 'Regístrate',
          message = '¿Ya tienes cuenta?',
          messageAction = 'Crear cuenta',
          messageTarget = 'login';

    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState({
        name: '',
        address: [],
        email: '',
        password: '',
      });
    const emailValidation = (email) =>{
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email || regex.test(email) === false){
            //alert('email invalido')
            return false;
        }
        return true;
    }
//enviamos la informacion a la store.
    const handleSignUp = () => {

        if(!formValue.password || !formValue.name || !formValue.address || !formValue.email){
            if(emailValidation(formValue.email)){
                Alert.alert('Error', 'Debes completar todos los campos para registrar un nuevo usuario')
            }
        }else{
            dispatch(signup(formValue));
            Alert.alert('Felicidades',`El Usuario ${formValue.name} fue agregado con exito`)
        }
        
    }
  return (
    <View style={styles.globalMargin}>
    <KeyboardAvoidingView
        behavior='height'
        style={styles.authContainer}
    >
        <View>
            <Text style={styles.authTitle}>
                {title}
            </Text>
            <TextInput
                label={'Nombre'}
                style={styles.formInput}
                autoCapitalize='none'
                onChangeText={(value) => setFormValue({... formValue, name: value})}
                value={formValue.name}
            />
            <TextInput
                label='Dirección'
                style={styles.formInput}
                autoCapitalize='none'
                onChangeText={(value) => setFormValue({... formValue, address: [value]})}
                value={formValue.address}
            />
            <TextInput
                label='Email'
                style={styles.formInput}
                keyboardType='email-address'
                autoCapitalize='none'
                onChangeText={(value) => setFormValue({... formValue, email: value})}
                value={formValue.email}
            />
            <TextInput
                label="Password"
                secureTextEntry
                style={styles.formInput}
                right={<TextInput.Icon icon="eye" />}
                autoCapitalize='none'
                onChangeText={(value) => setFormValue({... formValue, password: value})}
                value={formValue.password}
            />
            <View style={styles.promp}>
                <Button  mode="outlined"  onPress={()=> handleSignUp()}>
                    <Text style={styles.authText}>{messageAction}</Text>
                </Button>
                <Text style={styles.authText} onPress={()=> navigation.navigate('Auth')}>{message}</Text>
            </View>
        </View>
    </KeyboardAvoidingView>   
    </View>
  )
}