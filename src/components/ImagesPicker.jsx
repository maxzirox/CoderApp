import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from '../themes/appTheme';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'react-native-paper';
import { getImage } from '../store/actions/user.action';

export const ImagesPicker = () => {
  const userID = useSelector(state => state.user.userId)
  const logId = useSelector(state => state.auth.userId)
  const userData = useSelector( state => state.user.data)
  const userImage = userData.map(item => item.imagen)
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
      base64: false,
    })
    if (!result.canceled) {
      let uriParts = result.assets[0].uri.split('.')
      let fileType = uriParts[uriParts.length - 1]
      let date = new Date();
      setImage({
        name: `photo${date}.${fileType}`,
        type: `image/${fileType}`,
        uri: result.assets[0].uri
      });
    }
  };

  const onHandlerPress = () =>{
    //console.log('imagen desde press: ', image);
    dispatch(getImage(image.uri, userID, image.name, logId))
    if(image !== null){setImage(null);}
    
  }

  return (
    <View>
      {!image ?
      <View >
        <Image source={{ uri: `${userImage}` }} style={{ width: 100, height: 100, borderRadius: 30, alignSelf: 'center' }} />
          <Text style={{ alignSelf: 'center', marginVertical: 10 }}>{userData.map(item => item.email)}</Text>
        <Button type='outlined' style={styles.buttonMenu}title="Cambiar Imagen" onPress={pickImage} />
      </View>  
      :
      <View>
        <Image source={{ uri: image.uri }} style={{ width: 100, height: 100, borderRadius: 30, alignSelf: 'center' }} />
          <Text style={{fontSize: 10, color: 'red', alignSelf: 'center'}}>{image.name}</Text>
        <Button style={styles.buttonMenu}title="Guardar" onPress={()=> onHandlerPress()} />
      </View> }
    </View>
  );
}