import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from '../themes/appTheme';
import { useDispatch, useSelector } from 'react-redux';
import { getImage } from '../store/actions/auth.action';
import { Text } from 'react-native-paper';

export const ImagesPicker = () => {
  const userID = useSelector( state => state.auth.userId)
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
      base64: false,
    })
    if (!result.canceled) {
      let resultAssets = result.assets
      let uriParts = result.assets[0].uri.split('.')
      let fileType = uriParts[uriParts.length - 1]
      let date = new Date();
      console.log('assets desde imagesPicker: ', resultAssets)

      setImage({
        name: `photo${date}.${fileType}`,
        type: `image/${fileType}`,
        uri: result.assets[0].uri
      });
      //console.log('uriparts: ', uriParts)
      //console.log('filetype: ', fileType)
      //console.log('data desde imagepicker: ', image)
      //console.log('userID: ', userID)
    }
  };

  return (
    <View >
      <Button type='outlined' style={styles.buttonMenu}title="Cambiar Imagen" onPress={pickImage} />
      {image &&
      <View>
      <Image source={{ uri: image.uri }} style={{ width: 100, height: 100, borderRadius: 30, alignSelf: 'center' }} />
      <Text style={{fontSize: 10, color: 'red', alignSelf: 'center'}}>{image.name}</Text>
      <Button style={styles.buttonMenu}title="Guardar" onPress={()=>{ dispatch(getImage(image.uri, userID[0], image.name))}} />
      </View> }
    </View>
  );
}