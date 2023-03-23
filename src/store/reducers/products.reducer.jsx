import { createStore, combineReducers } from "redux";
import { useProducts } from "../../components/useProducts";


const initialState = {
    products: useProducts,
    selected: null,
}

const ProductReducer = (state = initialState, action) => {
    return state
}

export default ProductReducer