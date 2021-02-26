import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Product } from '../components/Product';
import { LoadingBox } from '../components/LoadingBox';
import { MessageBox } from '../components/MessageBox';
import { listProducts } from '../actions/productActions';

export const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.products)
    const { loading, error, products } = productList;
    useEffect(() => {
        dispatch( listProducts )
    }, [dispatch])

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
