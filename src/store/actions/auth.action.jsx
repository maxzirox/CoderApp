import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import dataBase, { URL_AUTH_SINGIN, URL_AUTH_SINGUP } from "../../utils/firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";

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
        const userDoc = await addDoc(usersFirebase, {... payload, userId: data.localId, isAdmin: false})
        const userQuery = query(collection(dataBase, 'usuarios'), where('userId', '==', data.localId))
        const querySnapshot = await getDocs(userQuery)
        const userId = querySnapshot.docs.map(item => item.id)
        const userData = querySnapshot.docs.map(item => item.data());
        dispatch({
            type: SIGNUP,
            token: data.idToken,
            userId: userId,
            data: userData
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
        //const userID = await getUsers(data.localId)
        const userQuery = query(collection(dataBase, 'usuarios'), where('userId', '==', data.localId))
        const querySnapshot = await getDocs(userQuery)
        const userId = querySnapshot.docs.map(item => item.id)
        const userData = querySnapshot.docs.map(item => item.data());
        //console.log('datos desde auth: ',userData)
        
        dispatch({
            type: SIGNIN,
            token: data.idToken,
            userId: userId,
            data: userData,
        });

    }

}

export const getImage = (image, id) =>{
    return async dispatch => {
            const userDocRef = doc(dataBase, 'usuarios', id)
            try{
              //con arayUnion agregamos un nuevo elemento a las direcciones
              await updateDoc(userDocRef, {imagen: image.uri})
              .then(alert('imagen cambiada'))
              dispatch({
                type: GET_IMAGE,
                url: image,
              })
            } catch (err) {
              alert(err)
            } 
    }
}