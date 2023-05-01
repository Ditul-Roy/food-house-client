import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

const Chef = () => {
    const chefs = useLoaderData();

    return (
        <div>
            <h1>tota chef: {chefs.length}</h1>
            <div className='grid lg:grid-cols-3'>
                {
                    chefs.map(chef => <ChefCard
                        key={chef}
                        chef={chef}
                    ></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Chef;