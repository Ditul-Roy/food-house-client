import React from 'react';
import {  FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefCard = ({ chef }) => {
    const {_id, name, image_url, years_of_experience, num_recipes, like } = chef;
    return (
        <div className='m-4'>
            <div className="card w-full bg-slate-600 shadow-xl">
                <figure className="px-10 pt-10">
                    <LazyLoadImage 
                    effect='blur'
                    src={image_url} 
                    alt="" 
                    className="rounded-xl h-96 w-96 "
                    placeholderSrc={image_url} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white">{name}</h2>
                    <p className='text-amber-600'>Years of experience: {years_of_experience}</p>
                    <p className='text-amber-600'>Number of recipes: {num_recipes}</p>
                    <div className="card-actions">
                        <Link className='btn btn-warning text-white' to={`/recipe/${_id}`}>recipe details</Link>
                    </div>
                    <hr />
                    <div className=" justify-end">
                        <div className="flex text-amber-600"><FaHeart className='mt-2 me-4'/> {like}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;