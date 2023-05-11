
import { SELECT_PRODUCT, FILTER_PRODUCT, GET_PRODUCTS, ADD_PRODUCT } from "../actions/product.action";




const initialState = {
    products: [],
    filteredProducts: [],
    selected: null,
}

const ProductReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        case SELECT_PRODUCT:
            const indexProduct = state.products.findIndex((product) => product.id === action.productId)
            if(indexProduct === -1) return state;
            //copiamos el estado con el spring operator y seleccionamos el producto que le pasamos con el index
            return{ ...state, selected: state.products[indexProduct]}
        case FILTER_PRODUCT:
            return{ ...state, filteredProducts: state.products.filter(product => product.id === action.productId)}
        
        case ADD_PRODUCT:
            const newState = []
            return newState
            
        default:
            return state;
    }
}

export default ProductReducer