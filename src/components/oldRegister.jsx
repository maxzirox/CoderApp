import React from 'react'
import { KeyboardAvoidingView, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { Button, TextInput } from 'react-native-paper'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../store/actions/auth.action'


export const RegisterForm = () => {
    const title = 'Regístrate',
          message = '¿Ya tienes cuenta?',
          messageAction = 'Crear cuenta',
          messageTarget = 'login';

    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState({
        name: '',
        address: '',
        email: '',
        password: '',
      });
//enviamos la informacion a la store.
    const handleSignUp = () => {
        dispatch(signup(formValue));
        alert(`El producto ${formValue.name} fue agregado con exito`)
    }
  return (
    <KeyboardAvoidingView
        behavior='height'
        style={styles.authContainer}
    >
        <View>
            <Text style={styles.authTitle}>
                {title}
            </Text>
            <TextInput
                label='Nombre'
                style={styles.formInput}
                autoCapitalize='none'
                onChangeText={(value) => setFormValue({... formValue, name: value})}
                value={formValue.name}
            />
            <TextInput
                label='Dirección'
                style={styles.formInput}
                autoCapitalize='none'
                onChangeText={(value) => setFormValue({... formValue, address: value})}
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
                    <Text>{messageAction}</Text>
                </Button>
                <Text style={styles.authText}>{message}</Text>
            </View>
        </View>
    </KeyboardAvoidingView>   
  )
}
