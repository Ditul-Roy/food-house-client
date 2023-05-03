import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const RecipeCart = ({ recipe }) => {
    const { image_url, recipe_name, ingredients, rating, cooking_method } = recipe;
    const [isDisabled, setIsDisabled] = useState(true);

    const handleFavouritebtn = () => {
        toast('Woww you are add this recipe');
        setIsDisabled();
    }
    return (
        <div className="card Lg:w-96 bg-base-100 shadow-xl m-4">
            <figure className="px-10 pt-10">
                <LazyLoadImage 
                src={image_url} 
                alt="" 
                className="rounded-xl h-96 w-80"
                placeholderSrc={image_url} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl text-amber-600">{recipe_name}</h2>
                <p className='text-green-600'>{cooking_method}</p>
                <div>
                    <span className='text-xl'>Ingradients: </span>
                    {
                        ingredients.map((ingredient, index) => <ul key={index}><li>{ingredient}</li></ul>)
                    }
                </div>
                <div className='flex text-green-800 my-8'>
                    <p className='me-10'><small>{rating.stars} stars rating</small></p>
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