import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Product } from '../components/Product';
import { LoadingBox } from '../components/LoadingBox';
import { MessageBox } from '../components/MessageBox';

export const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setloading(true);
                const {data} = await axios.get('/api/products');
                setloading(false);
                setProducts(data);
            } catch(err) {
                setError(err.message)
                setloading(false)
            }
        }
        fetchData();
    }, [])

    return (
        <>
            {
                loading ? (<LoadingBox></LoadingBox>)
                : error ? (<MessageBox variant="danger">{ error }</MessageBox>)
                : (
                    <div className="row center">
                        {
                            products.map( product => (
                                <Product key={ product._id } { ...product } />
                            ) )
                        }
                    </div>
                )
            }
        </>
    )
}
