import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";
// import { types } from "../types/types";


const initialState = { loading: true, products: [] };

export const productsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true }
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false, products: action.payload
            }
        case PRODUCT_LIST_FAIL:
            return{
                loadind: false,
                error: action.payload
            }

        default:
            return state;
    }
}
