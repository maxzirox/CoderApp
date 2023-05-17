import { AppBar, Switch, TextInput } from '@react-native-material/core'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { styles } from '../themes/appTheme'
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/actions/product.action'
import { Button } from 'react-native-paper'

export const AddProduct = () => {
    
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState({
        categoria: '',
        descripcion: '',
        imagen: '',
        precio: 0,
        stock: '',
        titulo: ''
      });

    const [checked, setChecked] = useState(false);

    const handleSubmit = () =>{
        console.log(formValue) 
        //setFormValue({...formValue})
         dispatch(addProduct(formValue))
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
            style={{ display: 'flex', height: 50, backgroundColor: '#522B5B', alignContent: 'space-between'}}
        >
            <Text style={{  color: 'aliceblue', fontSize: 25, textAlign: 'center', alignContent: 'space-between', alignSelf: 'center', }}>
                Agregar Productos
                <Switch value={checked} onValueChange={() => setChecked(!checked)} />
            </Text>
        </View>
        { checked ? 
        <ScrollView style={{flex: 1, paddingBottom: 530}}>
            <View style={{backgroundColor: '#522B5B'}}>
                <TextInput variant="outlined" onChangeText={(value) => setFormValue({... formValue, titulo: value})} value={formValue.titulo} placeholder="Titulo" style={{ margin: 16 }} />
                <TextInput variant="outlined" onChangeText={(value) => setFormValue({... formValue, categoria: value})} placeholder="Categoria" style={{ margin: 16 }} />
                <TextInput variant="outlined" onChangeText={(value) => setFormValue({... formValue, descripcion: value})} placeholder="Descripcion" style={{ margin: 16 }} />
                <TextInput variant="outlined" onChangeText={(value) => setFormValue({... formValue, stock: value})} placeholder="Stock" style={{ margin: 16 }} />
                <TextInput variant="outlined" onChangeText={(value) => setFormValue({... formValue, precio: value})} placeholder="Precio" style={{ margin: 16 }} />
                <TextInput variant="outlined" onChangeText={(value) => setFormValue({... formValue, imagen: value})} placeholder="Url Imagen" style={{ margin: 16 }} />
                <Button
                    title= 'Agregar'
                    onPress= {() => handleSubmit()}
                >
                    <Text style={{color: 'aliceblue'}}>Agregar</Text>
                </Button>
                <Button
                    title= 'Limpiar'
                    onPress= {() => handleReset()}
                >
                    <Text style={{color: 'aliceblue'}}>Limpiar</Text>
                </Button>
            </View>
        </ScrollView>: 
        <View/>
        }
        
    </>
  )
}
