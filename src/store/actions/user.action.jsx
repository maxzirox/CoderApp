import {  collection, doc, arrayUnion, getDocs, query, updateDoc, where } from "firebase/firestore";
import dataBase from "../../utils/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const GETINFO = 'GET_INFO';
export const GET_IMAGE = 'GET_IMAGE';
export const ADD_PLACE = 'ADD_PLACE';
export const EDIT_INFO = 'EDIT_INFO';
export const GET_ORDERS = 'GET_ORDERS';

export const addPlace = ( newAddress, userId, authId ) => {
    return async dispatch => {
        
            const userDocRef = doc(dataBase, 'usuarios', userId)
            try{
              //con arayUnion agregamos un nuevo elemento a las direcciones
              await updateDoc(userDocRef, { address: arrayUnion(newAddress)})
              .then(alert(`Nueva direccion registrada con exito`))
              const userQuery = query(collection(dataBase, 'usuarios'), where('userId', '==', authId))
              const querySnapshot = await getDocs(userQuery)
              const userData = querySnapshot.docs.map(item => item.data());
              dispatch({
                type: ADD_PLACE,
                data: userData,
                confirm: true,
              })
            } catch (err) {
              alert(err)
            }    
          }
    }


export const getInfo = (userId) =>{

    return async dispatch => {

        const userQuery = query(collection(dataBase, 'usuarios'), where('userId', '==', userId))
        const querySnapshot = await getDocs(userQuery)
        const userID = querySnapshot.docs.map(item => item.id)
        const userData = querySnapshot.docs.map(item => item.data());
        console.log('id coleccion user: ', userID[0]);
        dispatch({
            type: GETINFO,
            //token: data.idToken,
            userId: userID[0],
            data: userData,
        });

    }

}


export const getImage = (image, userId, name, logId) =>{
  return async dispatch => {
          const userDocRef = doc(dataBase, 'usuarios', userId)
          //aqui convertimos la imagen a blob
          const blobImage = await new Promise((resolve, reject) => {
              const xhr = new XMLHttpRequest();
              xhr.onload = () =>{
                  resolve(xhr.response);
              };
              xhr.onerror = () => {
                  reject(new TypeError('Network request failed'));
              };
              xhr.responseType = 'blob';
              xhr.open("GET", image, true);
              xhr.send(null);
          })
          try{
              let URL = '';
              const storage = getStorage();
              const storageRef = ref(storage, `avatar/${name}`);
              const metadata = {
                  contentType: 'image/jpeg',
                };
              // 'file' comes from the Blob or File API
              await uploadBytes(storageRef, blobImage, metadata);
              URL = await getDownloadURL(storageRef).then((downloadURL) => downloadURL);
              await updateDoc(userDocRef, {imagen: URL});
            
          //const userQuery = query(collection(dataBase, 'usuarios')
              const userQuery = query(collection(dataBase, 'usuarios'), where('userId', '==', logId))
              const querySnapshot = await getDocs(userQuery)
              const userData = querySnapshot.docs.map(item => item.data())

              dispatch({
                type: GET_IMAGE,
                data: userData,
                confirm: true
              })
          } catch (err) {
            alert(err)
          } 
  }
}

export const editInfo = ( nombre, email, phone, logId, userId) => {
  return async dispatch => {
    const userDocRef = doc(dataBase, 'usuarios', userId)
    try{
      
      await updateDoc(userDocRef, { 
        name: nombre,
        email: email,
        phone: phone  
      })
      .then(alert(`Nueva direccion registrada con exito`))
      const userQuery = query(collection(dataBase, 'usuarios'), where('userId', '==', logId))
      const querySnapshot = await getDocs(userQuery)
      const userData = querySnapshot.docs.map(item => item.data());
      dispatch({
        type: EDIT_INFO,
        data: userData,
        confirm: true,
      })
    } catch (err) {
      alert(err)
    }    
  }
}

export const getOrders = (userId) => {
  return async dispatch => {
    try{
      const orderQuery = query(collection(dataBase, 'ordenes'), where('idCliente', '==', userId))
      const querySnapshot = await getDocs(orderQuery)
      const ordersData = querySnapshot.docs.map(item => item.data())
      console.log('orders desde action: ', ordersData)
      dispatch({
        type: GET_ORDERS,
        orders: ordersData,
      })
    }
    catch (err) {
      alert(err)
    }  

  }
}
