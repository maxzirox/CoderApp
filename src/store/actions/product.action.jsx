import { addDoc, collection, getDocs } from "firebase/firestore";
import dataBase from "../../utils/firebase";

export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const FILTER_PRODUCT = 'FILTER_PRODUCT';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT'
//cuando ejecutamos pasa un id de producto
export const selectProduct= (productId) => ({
    type: SELECT_PRODUCT,
    productId,
})
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

export const addProduct = (payload) =>{
    return async dispatch =>{
        try{
            const productFirebase = collection(dataBase, 'productos')
            const productDoc = await addDoc(productFirebase, payload)
            console.log(productDoc.id)
            dispatch({
                type: ADD_PRODUCT,
                confirm: true,
            })
        } catch(error){
            console.log(error.message)
        }
    }
}