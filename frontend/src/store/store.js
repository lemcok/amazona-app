import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from '../reducers/productsReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    products: productsReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)
