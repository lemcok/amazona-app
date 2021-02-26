import { types } from "../types/types";


const initialState = {};

export const productsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.notesLoad:
            return {
                ...state,
                products: [ action.payload, ...state.products ] 
            }
    
        default:
            return state;
    }
}
