import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const RecipeDetails = () => {
    const recipe = useLoaderData();
    const { name, image_url, like, details, num_recipes, years_of_experience } = recipe;
    console.log(recipe);
    return (
        <div className='lg:mt-40'>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="" className='h-96 w-96' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <p>Number of recipe: {num_recipes}</p>
                    <p>Experience: {years_of_experience}year`s</p>
                    <p><FaHeart></FaHeart> {like}</p>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;