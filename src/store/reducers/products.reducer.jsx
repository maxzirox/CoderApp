import { createStore, combineReducers } from "redux";
import { useProducts } from "../../hooks/useProducts";
import { productos } from "../../utils/products";
import { SELECT_PRODUCT, FILTER_PRODUCT, LIST_PRODUCTS } from "../actions/product.action";




const initialState = {
    products: productos,
    filteredProducts: [],
    selected: null,
}

const ProductReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_PRODUCT:
            const indexProduct = state.products.findIndex((product) => product.id === action.productId)
            if(indexProduct === -1) return state;
            //copiamos el estado con el spring operator y seleccionamos el producto que le pasamos con el index
            return{ ...state, selected: state.products[indexProduct]}
        case FILTER_PRODUCT:
            return{ ...state, filteredProducts: state.products.filter(product => product.id === action.productId)}
        
        default:
            return state;
    }
}

export default ProductReducer