import React from 'react'
import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../themes/appTheme';
import { editInfo } from '../store/actions/user.action';

export const UserInfo = () => {
    const userData = useSelector(state => state.user.data)
    const logId = useSelector(state => state.auth.userId)
    const userId = useSelector(state => state.user.userId)
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        phone: '',
      });

    const [checked, setChecked] = useState(false);
    
    const image = userData.map(item => item.imagen)
    const userName = userData.map(item => item.name)
    const userEmail = userData.map(item => item.email)
    const userPhone = userData.map(item => item.phone)
    const handleSubmit = () =>{
          console.log(logId) 
        //setFormValue({...formValue})
         dispatch(editInfo(formValue.name, formValue.email, formValue.phone, logId, userId))
         .then(()=>{
          alert(`Datos personales modificados con exito`);
          handleReset();
         })
         

      }

    const handleReset = () =>{
        setFormValue({
            name: '',
            email: '',
            phone: '',
          })
    }
  return (
    <ScrollView style={{flex: 1, paddingBottom: 530}}>
        <Image source={{ uri: `${image}` }} style={{ width: 100, height: 100, borderRadius: 30, alignSelf: 'center' }} />
        <Text style={{ alignSelf: 'center', marginVertical: 10 }}>{userData.map(item => item.email)}</Text>
        <View style={{backgroundColor: 'purple'}}>
            <Text style={{ alignSelf: 'center', marginVertical: 20, fontSize: 20, color: 'aliceblue' }}>Editar informacion personal</Text>
            <TextInput variant="outlined" onChangeText={(value) => setFormValue({... formValue, name: value})}  placeholder={`${userName}`} style={{ margin: 16 }} />
            <TextInput variant="outlined" onChangeText={(value) => setFormValue({... formValue, email: value})} placeholder={`${userEmail}`} style={{ margin: 16 }} />
            <TextInput variant="outlined" onChangeText={(value) => setFormValue({... formValue, phone: value})} placeholder={`${userPhone}`} style={{ margin: 16 }} />

            <Button
                style={styles.btnDetail}
                onPress= {() => handleSubmit()}
            >
                <Text style={{ alignSelf: 'center', marginVertical: 20, fontSize: 20, color: 'aliceblue' }}>Cambiar</Text>
            </Button>
            <Button
                title= 'Limpiar'
                onPress= {() => handleReset()}
            />
        </View>
        </ScrollView>
  )
}
