import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

export const CartScreen = ( props ) => {
    const dispatch = useDispatch()
    const productId = props.match.params.id;
    const qty = props.location.search
        ? Number(props.location.search.split('=')[1]) 
        : 1;

    useEffect(() => {
        if ( productId ) {
            dispatch( addToCart( productId, qty ) );
        }
    }, [ dispatch, productId, qty ])

    return (
        <div>
            <h2>CardScreen</h2>
            <p>
                ADD TO CARD : ProdcutID: { productId } Qty: { qty }
            </p>
        </div>
    )
}
