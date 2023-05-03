import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import Services from '../Services/Services';
import Facility from '../Facility/Facility';

const Chef = () => {
    const chefs = useLoaderData();

    return (
        <div>
            
            <div className='text-center my-10'>
                <h1 className='text-3xl text bold text-amber-800'>Our chef</h1>
                <p className='text-xl text-yellow-400'>they are serving you to eat clean food.</p>
            </div>
            <div className='grid lg:grid-cols-3'>
                {
                    chefs.map(chef => <ChefCard
                        key={chef}
                        chef={chef}
                    ></ChefCard>)
                }
            </div>
            <Facility></Facility>
            <Services></Services>
        </div>
    );
};

export default Chef;