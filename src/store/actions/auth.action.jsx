import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import dataBase, { URL_AUTH_SINGIN, URL_AUTH_SINGUP } from "../../utils/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const SIGNUP = 'SIGN_UP';
export const SIGNIN = 'SIGN_IN';
export const GET_IMAGE = 'GET_IMAGE'

export const signup = (payload) => {
    return async dispatch => {
        const response = await fetch(URL_AUTH_SINGUP, {
            method: 'POST',
            header: {
                'Countent-Type': 'aplication/json',
            },
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            }),
        });

        const data = await response.json();
        
        const usersFirebase = collection(dataBase, 'usuarios')
        await addDoc(usersFirebase, {... payload, userId: data.localId, isAdmin: false})
        const userQuery = query(collection(dataBase, 'usuarios'), where('userId', '==', data.localId))
        const querySnapshot = await getDocs(userQuery)
        const userId = querySnapshot.docs.map(item => item.id)
        //const userData = querySnapshot.docs.map(item => item.data());
        dispatch({
            type: SIGNUP,
            token: data.idToken,
            userId: data.localId,
            //data: userData
        });

    }
}

export const signin = (email, password) =>{

    return async dispatch => {
        
        const response = await fetch(URL_AUTH_SINGIN, {
            method: 'POST',
            header: {
                'Countent-Type': 'aplication/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true,
            }),
        });

        const data = await response.json();
        const userQuery = query(collection(dataBase, 'usuarios'), where('userId', '==', data.localId))
        const querySnapshot = await getDocs(userQuery)
        const userId = querySnapshot.docs.map(item => item.id)
        //const userData = querySnapshot.docs.map(item => item.data());

        
        dispatch({
            type: SIGNIN,
            token: data.idToken,
            userId: data.localId,
            //data: userData,
        });

    }

}
