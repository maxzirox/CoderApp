import { Firestore, arrayUnion, doc, updateDoc } from "firebase/firestore"
import dataBase from "../../utils/firebase"

export const ADD_PLACE = 'ADD_PLACE'

export const addPlace = ( newAddress, id ) => {
    return async dispatch => {
        
            const userDocRef = doc(dataBase, 'usuarios', id)
            try{
              //con arayUnion agregamos un nuevo elemento a las direcciones
              await updateDoc(userDocRef, { address: arrayUnion(newAddress)})
              .then(console.log('agregado'))
              alert(`Nueva direccion registrada con exito`)
              dispatch({
                type: ADD_PLACE,
                confirm: true,
              })
            } catch (err) {
              alert(err)
            }    
          }
    }
