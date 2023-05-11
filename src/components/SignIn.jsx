import React from 'react'
import { KeyboardAvoidingView, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { Button, TextInput } from 'react-native-paper'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signin, signup } from '../store/actions/auth.action'


export const SignIn = ({navigation}) => {
    const title = 'Ingresar',
          message = 'Crea una cuenta',
          messageAction = 'Ingresar',
          messageTarget = 'login';

    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
      });
//enviamos la informacion a la store.
    const handleSignUp = () => {
        dispatch(signin(formValue.email, formValue.password));
        alert(`El usuario ${formValue.email} ingreso con exito`)
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
                <Button mode='outlined' onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.authText}>{message}</Text>
                </Button>
                
            </View>
        </View>
    </KeyboardAvoidingView>   
  )
}