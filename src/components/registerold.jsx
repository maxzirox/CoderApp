import React from 'react'
import { Alert, KeyboardAvoidingView, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { Button, TextInput } from 'react-native-paper'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../store/actions/auth.action'
import { useReducer } from 'react'
import { useCallback } from 'react'
import { Input } from './input'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

export const formReducer = (state, action) => {
    if(action.type === FORM_INPUT_UPDATE){
        const inputValues = {
            ...state.inputValues,
            [action.input]: action.value 
        }
        const inputValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid,
        }
        let formIsValid = true;

        for (const key in inputValidities) {
            formIsValid = formIsValid && inputValidities[key];
        }

        return {
            formIsValid,
            inputValues,
            inputValidities,
        }
    }
}

export const RegisterForm = () => {
    
    const title = 'Regístrate',
          message = '¿Ya tienes cuenta?',
          messageAction = 'Crear cuenta',
          messageTarget = 'login';

    const [formState, formDispatch] = useReducer(formReducer, {
        inputValues: {
            fistName: '',
            lastName: '',
            email: '',
            password: '',
            address: '',
            state: '',
        },
        inputValidities: {
            firstName: false,
            lastName: false,
            email: false,
            password: false,
            address: false,
            state: false,
        },
        formIsValid: false,
    });

    const dispatch = useDispatch();
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    //const [name, setName] = useState('');
    //const [address, setAddress] = useState('');
//enviamos la informacion a la store.
    const handleSignUp = () => {
        
            dispatch(signup(formState.inputValues.firstName, formState.inputValues.lastName, formState.inputValues.email, formState.inputValues.password, formState.inputValues.address, formState.inputValues.state));
            alert(`Usuario ${formState.inputValues.email} creado con exito`)
        
    }

    const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        formDispatch({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier,
        });
    }, [formDispatch]);
  return (
    <KeyboardAvoidingView
        behavior='height'
        style={styles.authContainer}
    >
        <View>
            <Text style={styles.authTitle}>
                {title}
            </Text>
            <Input intialValue={formState.inputValues.fistName} 
                   intitiallyValid={formState.inputValidities.firstName} 
                   onInputChange={onInputChangeHandler}  
                   id='fistName'
                   required   
                   minLength={5}
                   label='First Name'
                   errorText='Ingresa nombre valido'
                   autoCapitañize='none'
            />
            <Input intialValue={formState.inputValues.lastName} 
                   intitiallyValid={formState.inputValidities.lastName} 
                   onInputChange={onInputChangeHandler}  
                   id='lastName'
                   required   
                   minLength={5}
                   label='Last Name'
                   errorText='Ingresa apellido valido'
                   autoCapitañize='none'
            />
            <Input intialValue={formState.inputValues.email} 
                   intitiallyValid={formState.inputValidities.email}
                   onInputChange={onInputChangeHandler}  
                   id='email'
                   required
                   email   
                   minLength={5}
                   label='email'
                   errorText='ingresa mail valido'
                   autoCapitañize='none'
                   keyboardType='email-address'
            />
            
            <Input intialValue={formState.inputValues.password} 
                   intitiallyValid={formState.inputValidities.password}
                   onInputChange={onInputChangeHandler}  
                   id='password'
                   required
                   email   
                   secureTextEntry
                   right={<TextInput.Icon icon="eye" />}
                   minLength={5}
                   label='password'
                   errorText='ingresa una password valido'
                   autoCapitañize='none'
            />
            <Input intialValue={formState.inputValues.address} 
                   intitiallyValid={formState.inputValidities.address} 
                   onInputChange={onInputChangeHandler}  
                   id='address'
                   required   
                   minLength={5}
                   label='Address'
                   errorText='Ingresa dirección valida'
                   autoCapitañize='none'
            />
            <Input intialValue={formState.inputValues.state} 
                   intitiallyValid={formState.inputValidities.state} 
                   onInputChange={onInputChangeHandler}  
                   id='state'
                   required   
                   minLength={5}
                   label='State'
                   errorText='Ingresa un estado o region valido'
                   autoCapitañize='none'
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


