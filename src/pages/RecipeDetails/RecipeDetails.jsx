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
        <div className='lg:mt-40 grid lg:grid-cols-2 lg:ms-20'>
            <div className=" bg-slate-800 shadow-xl w-5/4 h-fit">
                <img src={image_url} alt="" className='w-full h-5/3 rounded' />
                <div className="card-body text-center text-white">
                    <h2 className="text-bold text-center text-2xl">{name}</h2>
                    <p className='text-green-400'>{details}</p>
                    <p >Number of recipe: {num_recipes}</p>
                    <p >Experience: {years_of_experience}year`s</p>
                    <p >Likes: <FaHeart className='inline' /> {like}</p>
                </div>
            </div>
            <div className='ms-20'>
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