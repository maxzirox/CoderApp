import {  collection, doc, arrayUnion, getDocs, query, updateDoc, where } from "firebase/firestore";
import dataBase from "../../utils/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const GETINFO = 'GET_INFO';
export const GET_IMAGE = 'GET_IMAGE';
export const GET_ORDERS = 'GET_ORDERS';
export const ADD_PRODUCT = 'ADD_PRODUCT';




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



export const getOrders = (userId) => {
  return async dispatch => {
    try{
      const orderQuery = query(collection(dataBase, 'ordenes'), where('idCliente', '==', userId))
      const querySnapshot = await getDocs(orderQuery)
      const ordersData = querySnapshot.docs.map(item =>{
        let orders 
        orders = item.data()
        orders.id = item.id
        return orders
        })
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

export const addProduct = (payload, imagen) =>{
    return async dispatch =>{
        const blobImage = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = () =>{
                resolve(xhr.response);
            };
            xhr.onerror = () => {
                reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open("GET", imagen.uri, true);
            xhr.send(null);
        })

        try{
            let URL = '';
              const storage = getStorage();
              const storageRef = ref(storage, `Product/${imagen.name}`);
              const metadata = {
                  contentType: 'image/jpeg',
                };
              // 'file' comes from the Blob or File API
              await uploadBytes(storageRef, blobImage, metadata);
              URL = await getDownloadURL(storageRef).then((downloadURL) => downloadURL);

            const productFirebase = collection(dataBase, 'productos')
            await addDoc(productFirebase, {
                categoria: payload.categoria, 
                descripcion: payload.descripcion,
                imagen: URL,
                precio: payload.precio,
                stock: payload.stock,
                titulo: payload.titulo
                 })
            const productSnapshot = await getDocs(collection(dataBase, 'productos'));
            const productList = productSnapshot.docs.map((item) => item.data()); 
            dispatch({
                type: ADD_PRODUCT,
                products: productList,
                confirm: true,
            })
        } catch(error){
            console.log(error.message)
        }
    }
}