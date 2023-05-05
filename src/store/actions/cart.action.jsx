import { addDoc, collection } from "firebase/firestore";
import { URL_API } from "../../utils/dataBase";
import dataBase from "../../utils/firebase";

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CONFIRM_CART = 'CONFIRM_CART';

export const addItem = item => ({
    type: ADD_ITEM,
    item,
});

export const removeItem = itemId => ({
    type: REMOVE_ITEM,
    itemId
});

export const confirmCart = (payload, total) => {
    return async dispatch => {
        try{
            const orderFirebase = collection(dataBase, 'ordenes')
            const orderDoc = await addDoc(orderFirebase,{ items: payload, total})
            console.log(orderDoc.id)
        dispatch({
            type: CONFIRM_CART,
            confirm: true,
        });
        } catch(error){
            console.log(error.message);
        }
    }
}