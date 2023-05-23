import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import dataBase, { URL_AUTH_SINGIN, URL_AUTH_SINGUP, URL_CHANGE_PASS } from "../../utils/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { Alert } from "react-native";

export const SIGNUP = 'SIGN_UP';
export const SIGNIN = 'SIGN_IN';
export const GET_IMAGE = 'GET_IMAGE';
export const LOG_OUT = 'LOG_OUT';
export const CHANGE_PASS = 'CHANGE_PASS';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';

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
         dispatch({
            type: SIGNUP,
            //token: data.idToken,
            //userId: data.localId,
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
        if(data.error){
        if(data.error.message === 'EMAIL_NOT_FOUND'){
            Alert.alert('Email inválido', 'Correo no registrado')
        }
        if(data.error.message === 'INVALID_PASSWORD'){
            Alert.alert('Password inválido', 'Porfavor escribe la contraseña correcta')
        }else{
            Alert.alert('Demasiados intentos', 'Contraseña momentaneamente bloqueada por demasiados intentos incorrectos, intente dentro de unos minutos o restasblezca su password')
        }}else{
            dispatch({
                type: SIGNIN,
                token: data.idToken,
                userId: data.localId,
                //data: userData,
            });
        }
            
    }
}

export const logOut = (logId) => {
    return async dispatch => {
        const response = await fetch(URL_CHANGE_PASS, {
            method: 'POST',
            header: {
                'Countent-Type': 'aplication/json',
            },
            body: JSON.stringify({
                localId: logId
            }),
        });
        const data = await response.json();
        dispatch({
            type: LOG_OUT,
            token: null,
            userId: data.localId,
            data: [],
        });

    }
}

export const changePassword = (token, newPassword) => {
    return async dispatch => {
        
        const response = await fetch(URL_CHANGE_PASS, {
            method: 'POST',
            header: {
                'Countent-Type': 'aplication/json',
            },
            body: JSON.stringify({
                idToken: token,
                password: newPassword,
                returnSecureToken: true,
            }),
        });

        //const data = await response.json();
        //const userQuery = query(collection(dataBase, 'usuarios'), where('userId', '==', data.localId))
        //const querySnapshot = await getDocs(userQuery)
        //const userId = querySnapshot.docs.map(item => item.id)
        //const userData = querySnapshot.docs.map(item => item.data());

        
        dispatch({
            type: CHANGE_PASS,
        });

    }
}

export const changeEmail = (token, newEmail) => {
    return async dispatch => {
        
        const response = await fetch(URL_CHANGE_PASS, {
            method: 'POST',
            header: {
                'Countent-Type': 'aplication/json',
            },
            body: JSON.stringify({
                idToken: token,
                email: newEmail,
                returnSecureToken: true,
            }),
        });

        //const data = await response.json();
        //const userQuery = query(collection(dataBase, 'usuarios'), where('userId', '==', data.localId))
        //const querySnapshot = await getDocs(userQuery)
        //const userId = querySnapshot.docs.map(item => item.id)
        //const userData = querySnapshot.docs.map(item => item.data());

        
        dispatch({
            type: CHANGE_EMAIL,
        });

    }
}