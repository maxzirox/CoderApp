
import { Place } from '../../models/Place'
import { ADD_PLACE, GETINFO, GET_IMAGE } from '../actions/user.action'

const initialState = {
    data: [],
    userId: null,
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            // newPlace = new Place(Date.now(), action.payload.title)
            return {
                ...state,
                data: action.data
                //places: state.places.concat(newPlace)
            }
        case GET_IMAGE:
            return{
                ...state,
                data: action.data,
            }
        case GETINFO:
            return{
                ...state,
                data: action.data,
                userId: action.userId
            }
        default:
            return state
    }
}