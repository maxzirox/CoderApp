
import { Place } from '../../models/Place'
import { ADD_PLACE, GETINFO, GET_IMAGE, GET_ORDERS } from '../actions/user.action'

const initialState = {
    data: [],
    orders: [],
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
        case GET_ORDERS:
            return{
                ...state,
                orders: action.orders
            }
        default:
            return state
    }
}