import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const RecipeCart = ({ recipe }) => {
    const { image_url, recipe_name, ingredients, rating, cooking_method } = recipe;
    const [isDisabled, setIsDisabled] = useState(true);

    const handleFavouritebtn = () => {
        toast('Woww you are add this recipe');
        setIsDisabled();
    }
    return (
        <div className="card lg:w-96 bg-slate-600 shadow-xl mb-8">
            <figure className="px-10 pt-10">
                <LazyLoadImage
                    src={image_url}
                    alt=""
                    className="rounded-xl h-96 w-80"
                    placeholderSrc={image_url} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl text-white">{recipe_name}</h2>
                <p className='text-green-400'>{cooking_method}</p>
                <div className='text-white'>
                    <span className='text-xl'>Ingradients: </span>
                    {
                        ingredients.map((ingredient, index) => <p className='inline' key={index}>{ingredient},</p>)
                    }
                </div>
                <div className='flex text-white my-8'>
                    <div className='flex me-10'> <Rating style={{ maxWidth: 100 }} value={rating.stars} readOnly />
                        <span className='text-white ms-4'>{rating.stars}</span>
                    </div>
                    <p><small>{rating.reviews} reviews</small></p>
                </div>
                <div className="card-actions">
                    <button onClick={handleFavouritebtn} disabled={!isDisabled} className="btn btn-warning">favorite</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RecipeCart;