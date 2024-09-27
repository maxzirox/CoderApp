import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import dataBase from "../../utils/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const FILTER_PRODUCT = 'FILTER_PRODUCT';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT'
//cuando ejecutamos pasa un id de producto

export const filterProduct= (productId) => ({
    type: FILTER_PRODUCT,
    productId,
})
export const getProduct = () => {
    return async dispatch => {
        try{
            const productSnapshot = await getDocs(collection(dataBase, 'productos'));
            const productList = productSnapshot.docs.map((item) => {
                let product = item.data()
                product.id = item.id
                console.log(product)
                return product
            }); 
            dispatch({
                type: GET_PRODUCTS,
                payload: productList,
            });
        } catch(error){
            console.log(error.message);
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

export const selectProduct = (payload) =>{
    return async dispatch => {
        try{

            dispatch({
                type: SELECT_PRODUCT,
                selected: payload,
            });
        } catch(error){
            console.log(error.message);
        }
        
    }
}