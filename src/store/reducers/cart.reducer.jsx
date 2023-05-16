
import { ADD_ITEM, CONFIRM_CART, REMOVE_ITEM } from "../actions/cart.action";


//inicializamos el estado asignandole un objeto con un array de items vacio y un total en 0
const INITIAL_STATE = {
    items: [],
    user: [],
    total: 0,
}
// le pasamo una lista de prod a sumTotal para luego obtener un nuevo array con map que nos traera el precio total
const sumTotal = (list) => list.map((product) => product.quantity * product.precio)
.reduce((a, b) => a + b, 0);

//creamos una funcion reducer y le pasamos un estado y una accion
export const CartReducer = (state = INITIAL_STATE, action) => {
    //con un switch seleccionamos el tipo de accion que se ejecutara en un case
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
            // a filtered cart
            const filteredCart = state.items.filter(item => item.id !== action.itemId);
            return {
                ...state,
                items: filteredCart,
                total: sumTotal(filteredCart),
            };
        case CONFIRM_CART:
            const newState = [];
            return{
                ...state,
                items: newState,
                total: sumTotal(newState)
            }
        default:
            return state; 

    }
};

