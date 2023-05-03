import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import RecipeCart from '../../shared/RecipeCart/RecipeCart';

const RecipeDetails = () => {

    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('https://bangladeshi-chef-recipe-server-ditul-roy.vercel.app/recipes')
        .then(res=> res.json())
        .then(data =>setRecipes(data))
    },[])

    const recipe = useLoaderData();
    const { name, image_url, like, details, num_recipes, years_of_experience, recipe_id } = recipe;
    // console.log(recipe);

    const myrecipes = recipes.filter(r=>r.recipe_id === recipe_id);

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
            <div className='grid lg:grid-cols-3'>
                {
                    myrecipes.map((recipe, index)=> <RecipeCart 
                    key={index}
                    recipe={recipe}
                    ></RecipeCart>)
                }
            </div>
        </div>
    );
};

export default RecipeDetails;