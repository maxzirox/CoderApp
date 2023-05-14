import React from 'react'
import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../themes/appTheme';

export const UserInfo = () => {
    const userData = useSelector(state => state.user.data)
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        imagen: '',
      });

    const [checked, setChecked] = useState(false);
    
    const image = userData.map(item => item.imagen)
    const handleSubmit = () =>{
        console.log(formValue) 
        //setFormValue({...formValue})
         //dispatch(addProduct(formValue))
         alert(`El producto ${formValue.name} fue agregado con exito`)

      }

    const handleReset = () =>{
        setFormValue({
            nombre: '',
            email: '',
            imagen: '',

          })
    }
  return (
    <ScrollView style={{flex: 1, paddingBottom: 530}}>
        <Image source={{ uri: `${image}` }} style={{ width: 100, height: 100, borderRadius: 30, alignSelf: 'center' }} />
        <Text style={{ alignSelf: 'center', marginVertical: 10 }}>{userData.map(item => item.email)}</Text>
        <View style={{backgroundColor: 'purple'}}>
            <Text style={{ alignSelf: 'center', marginVertical: 20, fontSize: 20, color: 'aliceblue' }}>Editar informacion personal</Text>
            <TextInput variant="outlined" onChangeText={(value) => setFormValue({... formValue, nombre: value})}  placeholder="Nombre" style={{ margin: 16 }} />
            <TextInput variant="outlined" onChangeText={(value) => setFormValue({... formValue, email: value})} placeholder="Email" style={{ margin: 16 }} />
            <TextInput variant="outlined" onChangeText={(value) => setFormValue({... formValue, imagen: value})} placeholder="Imagen" style={{ margin: 16 }} />

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
