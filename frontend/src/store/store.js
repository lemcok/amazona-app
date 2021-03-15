import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducers } from '../reducers/cartReducers';
import { productDetailsReducer, productsReducer } from '../reducers/productsReducer';


const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse( localStorage.getItem('cartItems') ) 
        : []
    },
}

const reducers = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducers
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)
