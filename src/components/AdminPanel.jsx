import { AppBar, Button, Switch, TextInput } from '@react-native-material/core'
import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../themes/appTheme'
import dataBase from '../utils/firebase'

export const AdminPanel = () => {
    const [formValue, setFormValue] = useState({
        categoria: '',
        descripcion: '',
        imagen: '',
        precio: 0,
        stock: '',
        titulo: ''
      });
    const [succes, setSuccess] = useState('');
    const [checked, setChecked] = useState(true);

    const saveData = async (newProduct) => {
        const productFirebase = collection(dataBase, 'productos')
        const productDoc = await addDoc(productFirebase, newProduct)
        setSuccess(productDoc.id)
    }

    const handleSubmit = () =>{
        console.log(formValue) 
        //setFormValue({...formValue})
         saveData({...formValue})
         alert(`El producto ${formValue.titulo} fue agregado con exito`)

      }

  return (
    
    <View>
        <AppBar title="Agregar Producto" 
            leading={props => (<Switch value={checked} onValueChange={() => setChecked(!checked)} />)} 
        />
        { checked ? 
        <View>
        <TextInput variant="outlined" onChangeText={(value) => setFormValue({... formValue, titulo: value})} value={formValue.titulo} placeholder="Titulo" style={{ margin: 16 }} />
        <TextInput variant="outlined" onChangeText={(value) => setFormValue({... formValue, categoria: value})} placeholder="Categoria" style={{ margin: 16 }} />
        <TextInput variant="outlined" onChangeText={(value) => setFormValue({... formValue, descripcion: value})} placeholder="Descripcion" style={{ margin: 16 }} />
        <TextInput variant="outlined" onChangeText={(value) => setFormValue({... formValue, stock: value})} placeholder="Stock" style={{ margin: 16 }} />
        <TextInput variant="outlined" onChangeText={(value) => setFormValue({... formValue, precio: value})} placeholder="Precio" style={{ margin: 16 }} />
        <TextInput variant="outlined" onChangeText={(value) => setFormValue({... formValue, imagen: value})} placeholder="Url Imagen" style={{ margin: 16 }} />
        <Button
            title= 'Agregar'
            onPress= {() => handleSubmit()}
        />
        </View>: 
        <View/>
        }
    </View>
  )
}
