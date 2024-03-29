import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon';
import { LoadingBox } from '../components/LoadingBox';
import { MessageBox } from '../components/MessageBox';
import { Rating } from '../components/Rating';

export const ProductScreen = ( props ) => {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1)
    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch( detailsProduct( productId ) )
    }, [dispatch, productId])

    const handleAddToCard = () => {
        props.history.push(`/card/${ productId }?qty=${qty}`)
    }

    return (
        <>
            {
                loading ? (<LoadingBox></LoadingBox>)
                : error ? (<MessageBox variant="danger">{ error }</MessageBox>)
                : (
                    <>
                        <Link to="/" className='back-place' >
                            <ArrowLeftIcon />
                            Back to result
                        </Link>
                        <div>
                            <div className="row top">
                                <div className="col-2">
                                    <img src={ product.image} alt={ product.name } className='large'/>
                                </div>

                                <div className="col-1" style={{ padding: '0 3rem' }}>
                                    <ul>
                                        <li>
                                            <h1>{ product.name }</h1>
                                        </li>
                                        <li>
                                            <Rating 
                                                rating={ product.rating } 
                                                numReviews={ product.numReviews }  
                                            />
                                        </li> 
                                        <li>
                                            Price : ${ product.price }
                                        </li>
                                        <li>
                                            description:
                                            <p>{ product.description }</p>
                                        </li>

                                    </ul>
                                </div>

                                <div className="col-1">
                                    <div className="card card-body">
                                        <ul>
                                            <li>
                                                <div className="row">
                                                    <div>Price</div>
                                                    <div className="price">${ product.price }</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div>Status</div>
                                                    <div>
                                                        { product.countInStock>0
                                                            ? <span className="success">In Stock</span> 
                                                            : <span className="danger">Unavailable</span>
                                                        }
                                                    </div>
                                                </div>
                                            </li>
                                            {
                                                product.countInStock > 0 && (
                                                    <>
                                                        <li>
                                                            <div className="row">
                                                                <div>QTY</div>
                                                                <div>
                                                                    <select value={ qty } onChange={ e => setQty(e.target.value) }>
                                                                        {
                                                                            [...Array(product.countInStock).keys()].map( x => (
                                                                                <option key={ x + 1 } value={ x + 1 }>{ x + 1 }</option>
                                                                            ) )
                                                                        }
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <button onClick={ handleAddToCard } className="primary block">Add to card</button>
                                                        </li>
                                                    </>
                                                )
                                            }   
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
        
    )
}
