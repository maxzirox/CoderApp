import React from 'react'
import { Image, KeyboardAvoidingView, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { Button, TextInput } from 'react-native-paper'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signin, signup } from '../store/actions/auth.action'


export const SignIn = ({navigation}) => {
    const title = 'Iniciar Sesión',
          message = 'Crea una cuenta',
          messageAction = 'Login',
          messageTarget = 'login';

    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
        error: ''
      });
//enviamos la informacion a la store.
    const handleSignUp = () => {
        emailValidation(formValue.email)
        if(emailValidation){
            dispatch(signin(formValue.email, formValue.password))
        }

    }
    const emailValidation = (email) =>{
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email || regex.test(email) === false){
            setFormValue({
                error: "Email invalido"
            });
            return false;
        }
        return true;
    }

  return (
    <KeyboardAvoidingView
        behavior='height'
        style={styles.authContainer}
    >
        <View>
        <Image style={{width: 210, height: 120, alignSelf: 'center', marginTop: 10}} source={{ uri:'https://firebasestorage.googleapis.com/v0/b/wellnesgym-47cea.appspot.com/o/logos%2Flogo-kpc3.png?alt=media&token=e5666ce9-d91d-4a3b-92d5-5cfa9294b083'}} />
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
            <Text style={{color: 'red', fontSize: 10}}>{formValue.error}</Text>
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
                <Button mode='text' onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.authText}>{message}</Text>
                </Button>
                
            </View>
        </View>
    </KeyboardAvoidingView>   
  )
}