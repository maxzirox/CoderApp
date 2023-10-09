import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import ProductReducer from './reducers/products.reducer'
import { CartReducer } from './reducers/cart.reducer'
import { AuthReducer } from './reducers/auth.reducer'
import { userReducer } from './reducers/user.reducer'
import { adminReducer } from './reducers/admin.reducer'


const RootReducer = combineReducers({
    products: ProductReducer,
    cart: CartReducer,
    auth: AuthReducer,
    user: userReducer,
    admin: adminReducer,
    
})

export default createStore(RootReducer, applyMiddleware(thunk))