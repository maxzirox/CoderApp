import { AppBar, Button, Switch, TextInput } from '@react-native-material/core'
import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { styles } from '../themes/appTheme'
import dataBase from '../utils/firebase'


export const AddProduct = () => {
    
    const [formValue, setFormValue] = useState({
        categoria: '',
        descripcion: '',
        imagen: '',
        precio: 0,
        stock: '',
        titulo: ''
      });
    const [succes, setSuccess] = useState('');
    const [checked, setChecked] = useState(false);

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

    const handleReset = () =>{
        setFormValue({
            categoria: '',
            descripcion: '',
            imagen: '',
            precio: 0,
            stock: '',
            titulo: ''
          })
    }
  return (
    <>
        
        <View
            style={{ display: 'flex', height: 50, backgroundColor: 'purple', alignContent: 'space-between'}}
        >
            <Text style={{  color: 'aliceblue', fontSize: 25, textAlign: 'center', alignContent: 'space-between', alignSelf: 'center', }}>
                Agregar Productos
                <Switch value={checked} onValueChange={() => setChecked(!checked)} />
            </Text>
        </View>
        { checked ? 
        <ScrollView style={{flex: 1, paddingBottom: 530}}>
            <View style={{backgroundColor: 'purple'}}>
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
                <Button
                    title= 'Limpiar'
                    onPress= {() => handleReset()}
                />
            </View>
        </ScrollView>: 
        <View/>
        }
        
    </>
  )
}
