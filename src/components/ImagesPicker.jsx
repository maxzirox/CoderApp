import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from '../themes/appTheme';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Text } from 'react-native-paper';
import { getImage } from '../store/actions/user.action';
import { ModalCamera } from './ModalCamera';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export const ImagesPicker = () => {
  const userID = useSelector(state => state.user.userId)
  const logId = useSelector(state => state.auth.userId)
  const userData = useSelector( state => state.user.data)
  const userImage = userData.map(item => item.imagen)
  const [loader, setLoader] = useState(false)
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  

  const pickImageCamera = async () => {
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

  const pickImageGalery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
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

  const onHandlerPress = (cb) =>{
    dispatch(getImage(image.uri, userID, image.name, logId))
    .then( ()=>{if(image !== null){setImage(null);}})
  }

  return (
    <View>
      {!image ?
      <View>
        <Image source={{ uri: `${userImage}` }} style={{ width: 100, height: 100, borderRadius: 30, alignSelf: 'center' }} />
        <ModalCamera pickImageCamera={pickImageCamera} pickImageGalery={pickImageGalery}/>
        <Text style={{ alignSelf: 'center', marginVertical: 10, fontSize: 20}}>{userData.map(item => item.email)}</Text>
        
      </View>  
      :
      <View>
          <ActivityIndicator animating={true} color={MD2Colors.red800} style={{ width: 100, height: 100, borderRadius: 30, alignSelf: 'center' }} />
          <Text style={{fontSize: 10, color: 'red', alignSelf: 'center'}}>{image.name}</Text>
          <Button icon="camera" mode="text" onPress={() => onHandlerPress()}>
            guardar
          </Button>
      </View> }
    </View>
  );
}