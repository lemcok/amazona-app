import React from 'react'

export const CardScreen = ( props ) => {
    const productId = props.match.params.id;
    const qty = props.location.search
        ? Number(props.location.search.split('=')[1]) 
        : 1;

    return (
        <div>
            <h2>CardScreen</h2>
            <p>
                ADD TO CARD : ProdcutID: { productId } Qty: { qty }
            </p>
        </div>
    )
}
