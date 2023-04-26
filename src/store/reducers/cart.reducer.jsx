import { productos } from "../../utils/products";
import { ADD_ITEM, CONFIRM_CART, REMOVE_ITEM } from "../actions/cart.action";

const INITIAL_STATE = {
    items: [],
    total: 0,
}
const sumTotal = (list) => list.map((product) => product.quantity * product.precio)
.reduce((a, b) => a + b, 0);

export const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_ITEM:
            let updateCart = [];
            if(state.items.find(item => item.id === action.item.id)){
                updateCart = state.items.map(item => {
                    if(item.id === action.item.id) item.quantity++;
                    return item
                })
            }else{
                const item = { ...action.item, quantity: 1 };
                updateCart = [...state.items, item]
            }
            return { ...state, items: updateCart, total: sumTotal(updateCart)};
        
        case REMOVE_ITEM:
            const filteredCart = state.filter(item => item.id !== action.itemId);
            return {
                ...state,
                items: filteredCart,
                total: sumTotal(filteredCart),
            };
        default:
            return state; 

    }
};

