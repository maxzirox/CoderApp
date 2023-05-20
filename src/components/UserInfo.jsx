import React, { useEffect } from 'react'
import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../themes/appTheme';
import { editInfo, getInfo } from '../store/actions/user.action';

export const UserInfo = () => {
    let userData = useSelector(state => state.user.data)
    const logId = useSelector(state => state.auth.userId)
    const userId = useSelector(state => state.user.userId)
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        phone: '',
      });
      console.log('desde componente: ',userData)
    const [checked, setChecked] = useState(false);
    
    const image = userData.map(item => item.imagen)
    const userName = userData.map(item => item.name)
    const userEmail = userData.map(item => item.email)
    const userPhone = userData.map(item => item.phone)
    

    useEffect(()=>{
      dispatch(getInfo(logId))
      .then(info => {
        userData = [info]
        console.log('desde useEffect: ',userData)
        setChecked(false)
      } )
    }, [checked])

    const onHandleChange = (type, data) =>{
      if(type === 'Name'){
        dispatch(editInfo(data, userEmail, userPhone, logId, userId))
        .then(()=>{
          alert(`Nombre ${data} Cambiado con exito`);
          handleReset();
          setChecked(true)
        }) 
      }
      if(type === 'Email'){
        dispatch(editInfo(userName, data, userPhone, logId, userId))
        .then(()=>{
          alert(`Email ${data} Cambiado con exito`);
          handleReset();
          setChecked(true)
        })
      }
      if(type === 'Phone'){
        dispatch(editInfo(userName, userEmail, data, logId, userId))
        .then(()=>{
          alert(`Numero cambiado con exito`);
          handleReset();
          setChecked(true)
        })
      }
    }

    const handleSubmit = () =>{
      if(formValue.name || !formValue.email || !formValue.phone){
        dispatch(editInfo(formValue.name, formValue.email, formValue.phone, logId, userId))
        .then(()=>{
          alert(`Nombre Cambiado con exito`);
          handleReset();
          setChecked(true)
        })
      }

         
         

      }

    const handleReset = () =>{
        setFormValue({
            name: '',
            email: '',
            phone: '',
          })
    }
  return (
    <ScrollView style={{flex: 1, paddingBottom: 530, marginHorizontal: 20}}>
        <Image source={{ uri: `${image}` }} style={{ width: 100,marginVertical: 10, height: 100, borderRadius: 30, alignSelf: 'center' }} />
        <Text style={{ alignSelf: 'center', marginVertical: 10, color: 'aliceblue' }}>{userData.map(item => item.email)}</Text>
        <View style={{backgroundColor: '#2B124C'}}>
            <Text style={{ alignSelf: 'center', marginVertical: 20, fontSize: 20, color: 'aliceblue' }}>Editar informacion personal</Text>
            <TextInput 
              variant="outlined" 
              onChangeText={(value) => setFormValue({... formValue, name: value})} 
              label='Nombre' 
              placeholder={`${userName}`} 
              style={{ margin: 16 }} 
              right={<TextInput.Icon icon="pencil" onPress={() => onHandleChange('Name', formValue.name)}/>}
              />
            <TextInput 
              variant="outlined" 
              onChangeText={(value) => setFormValue({... formValue, email: value})} 
              label='Correo' 
              placeholder={`${userEmail}`} 
              style={{ margin: 16 }} 
              right={<TextInput.Icon icon="pencil" onPress={() => onHandleChange('Email', formValue.email)}/>}
              />
            { userPhone ?
              <TextInput
                variant="outlined" 
                onChangeText={(value) => setFormValue({... formValue, phone: value})} 
                label='Telefono'
                placeholder={`${userPhone}`} 
                style={{ margin: 16 }} 
                right={<TextInput.Icon icon="pencil" onPress={() => onHandleChange('Phone', formValue.phone)}/>}
                />
              :
              <TextInput 
                variant="outlined" 
                onChangeText={(value) => setFormValue({... formValue, phone: value})}  
                label='Telefono' 
                placeholder='Numbero Telefonico' 
                style={{ margin: 16 }} 
                right={<TextInput.Icon icon="pencil" onPress={() => onHandleChange('Phone', formValue.phone)}/>}
                />

            }

            <Button
                style={styles.btnDetail}
                onPress= {() => handleReset()}
            >
                <Text style={{ alignSelf: 'center', marginVertical: 20, fontSize: 20, color: 'aliceblue' }}>Limpiar</Text>
            </Button>

        </View>
        </ScrollView>
  )
}
