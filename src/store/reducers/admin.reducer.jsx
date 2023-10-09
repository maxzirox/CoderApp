import { Place } from '../../models/Place'
import { ADD_PRODUCT, GETINFO, GET_IMAGE, GET_ORDERS } from '../actions/admin.action'

const initialState = {
    data: [],
    orders: [],
    userId: null,
    products: [],
}

export const adminReducer = (state = initialState, action) => {
    switch(action.type) {
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
        case ADD_PRODUCT:
            const newState = []
            return{
                ...state,
                products: action.products,
                
            }
        default:
            return state
    }
}