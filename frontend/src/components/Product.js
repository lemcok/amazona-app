import React from 'react'
import { Link } from 'react-router-dom';
import { Rating } from './Rating'

export const Product = ({ _id, name, image, price, rating, numReviews}) => {
    return (
        <div key={ _id } className="card">
            <Link to={`/product/${ _id }`}>
                <img 
                    className="medium" 
                    src={ image } 
                    alt={ name }
                />
            </Link>
            <div className="card-body">
                <Link to={`/product/${ _id }`}>
                <h2>{ name }</h2>
                </Link>
                <Rating rating={ rating } numReviews={ numReviews }  />
                <div className="price">
                    ${ price }
                </div>
            </div>
        </div>
    )
}
