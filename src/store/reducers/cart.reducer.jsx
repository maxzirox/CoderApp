import { productos } from "../../utils/products";

const INITIAL_STATE = {
    items: productos,
    total: 27000,
}

export const CartReducer = (state = INITIAL_STATE, action) => {
    return state;
};

