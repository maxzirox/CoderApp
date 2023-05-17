
import { SELECT_PRODUCT, FILTER_PRODUCT, GET_PRODUCTS, ADD_PRODUCT } from "../actions/product.action";




const initialState = {
    products: [],
    filteredProducts: [],
    selected: [],
}

const ProductReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        case FILTER_PRODUCT:
            return{ ...state, filteredProducts: state.products.filter(product => product.id === action.productId)}
        
        case ADD_PRODUCT:
            const newState = []
            return{
                ...state,
                products: action.products,
                
            } 
        case SELECT_PRODUCT:
            return{
                ...state,
                selected: action.selected
            }
            
        default:
            return state;
    }
}

export default ProductReducer