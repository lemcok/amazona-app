import React, { useState } from 'react'

import { data } from '../data';
import { Product } from '../components/Product';

export const HomeScreen = () => {

    const [products, setProducts] = useState([]);

    return (
        <div className="row center">
            {
                data.products.map( product => (
                    <Product key={ product._id } { ...product } />
                ) )
            }
            
            
        </div>
    )
}
