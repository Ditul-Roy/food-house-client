import React from 'react';

const ChefCard = ({ chef }) => {
    const { name, image_url, years_of_experience, num_recipes, like } = chef;
    console.log(chef);
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                {/* <figure className="px-10 pt-10">
                    <img alt="Shoes" className="rounded-xl" />
                </figure> */}
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Years of experience: {years_of_experience}</p>
                    <p>Number of recipes: {num_recipes}</p>
                    <div className="card-actions">
                        <button className="btn btn-warning">view Recipe</button>
                    </div>
                    <hr />
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{like}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;