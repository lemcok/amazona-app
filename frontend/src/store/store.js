import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducers } from '../reducers/cartReducers';
import { productDetailsReducer, productsReducer } from '../reducers/productsReducer';
import { userAuthReducer, userRegisterReducer } from '../reducers/userAuthReducer';


const initialState = {
    userAuth: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo' )) : null
    },
    cart: {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse( localStorage.getItem('cartItems') ) 
        : [] ,
        shippingAddress: localStorage.getItem('shippingAddress')
        ? JSON.parse( localStorage.getItem('shippingAddress') )
        : {} ,
        paymentMethod: 'PayPal'
    },
}

const reducers = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducers,
    userAuth: userAuthReducer,
    userRegister: userRegisterReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)
