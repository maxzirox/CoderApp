import React from 'react'
import { useState } from 'react'
import { Image, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from '../themes/appTheme'
import { changePassword } from '../store/actions/auth.action'

export const ChangePassword = () => {
    const userData = useSelector(state => state.user.data)
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState({
        newPassword: '',
        verifyPassword: '',
        error: ''
      });
    const image = userData.map(item => item.imagen)

    const onHandleSubmit = () =>{
        console.log('token desde password: ',token)
        if(formValue.newPassword === formValue.verifyPassword){
            dispatch(changePassword(token, formValue.newPassword))
            .then(()=> alert('Password cambiado con exito'))
        }else{
            setFormValue({
                error: 'Ambos campos deben coincidir'
            })
        }
        
    }
  return (
    <View>
        <Image source={{ uri: `${image}` }} style={{ width: 100,marginVertical: 10, height: 100, borderRadius: 30, alignSelf: 'center' }} />
        <Text style={{ alignSelf: 'center', marginVertical: 10, color: 'aliceblue' }}>{userData.map(item => item.email)}</Text>
        <View style={{alignSelf: 'center', marginTop: 20}}>

            <TextInput
                label="New Password"
                secureTextEntry
                style={styles.formInput}
                right={<TextInput.Icon icon="eye" />}
                autoCapitalize='none'
                onChangeText={(value) => setFormValue({... formValue, newPassword: value})}
                value={formValue.newPassword}
            />
            <TextInput
                label=" Verify Password"
                secureTextEntry
                style={styles.formInput}
                right={<TextInput.Icon icon="eye" />}
                autoCapitalize='none'
                onChangeText={(value) => setFormValue({... formValue, verifyPassword: value})}
                value={formValue.verifyPassword}
            />
            <Text style={{color: 'red', fontSize: 10}}>{formValue.error}</Text>
        </View>
        <Button style={{width: 200, alignSelf: 'center'}} mode='outlined' onPress={onHandleSubmit}>
            <Text style={{color: 'aliceblue'}}>Cambiar</Text>
        </Button>
    </View>
  )
}
