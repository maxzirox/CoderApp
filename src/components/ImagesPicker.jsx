import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from '../themes/appTheme';
import { useDispatch, useSelector } from 'react-redux';
import { getImage } from '../store/actions/auth.action';

export const ImagesPicker = () => {
  const userID = useSelector( state => state.auth.userId)
  const [image, setImage] = useState({
    name: '',
    type: '',
    uri: '',
  });
  const dispatch = useDispatch();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    //console.log(result);
    if (!result.canceled) {
      const data = new FormData();
      let uriParts = result.assets[0].uri.split('.')
      let fileType = uriParts[uriParts.length - 1]
      

      //data.append('images', {
      //  name: `photo.${fileType}`,
      //  type: `image/${fileType}`,
      //  uri: result.assets[0].uri
      //})
      setImage({
        name: `photo.${fileType}`,
        type: `image/${fileType}`,
        uri: result.assets[0].uri
      });
      console.log('uriparts: ', uriParts)
      console.log('filetype: ', fileType)
      console.log('data desde imagepicker: ', image.name)
    }
  };

  return (
    <View >
      <Button type='outlined' style={styles.buttonMenu}title="Cambiar Imagen" onPress={pickImage} />
      {image &&
      <View>
      <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />
      <Button style={styles.buttonMenu}title="Guardar" onPress={()=>{ dispatch(getImage(image, userID))}} />
      </View> }
    </View>
  );
}