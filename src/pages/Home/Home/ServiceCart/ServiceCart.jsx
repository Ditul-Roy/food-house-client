import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ServiceCart = ({ service }) => {
    const { image_url, recipe_name, rating, cooking_method } = service;
    return (
        <div className="card Lg:w-96 bg-slate-600 shadow-xl m-4">
            <figure className="px-10 pt-10">
                <img src={image_url} alt="" className="rounded-xl h-96 w-80" loading='lazy' />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl text-white">{recipe_name}</h2>
                <p className='text-green-600'>{cooking_method}</p>
                <div className='flex text-green-800 my-8'>
                    <div className='flex me-10'> <Rating style={{ maxWidth: 100 }} value={rating.stars} readOnly />
                        <span className='text-white ms-4'>{rating.stars}</span>
                    </div>
                    <p className='text-white'><small>{rating.reviews} reviews</small></p>
                </div>
            </div>
            <button className='btn btn-warning text-white'><FaShoppingCart /> Add to cart</button>
        </div>
    );
};

export default ServiceCart;