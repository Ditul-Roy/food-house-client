import React, { useEffect, useState } from 'react';
import ServiceCart from '../Home/ServiceCart/ServiceCart';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://bangladeshi-chef-recipe-server-ditul-roy.vercel.app/recipes')
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(error => console.log(error))
    },[])

    const hanleSeeMore = (services) =>{
        services?.map((service, index) => <ServiceCart
        key={index}
        service={service}
        ></ServiceCart>)
    }
    return (
        <div>
            <h3 className='text-3xl text bold text-white text-center my-10'>Our services</h3>
            <div className='grid lg:grid-cols-3'>
                {
                    services?.slice(0, 15)?.map((service, index) => <ServiceCart
                    key={index}
                    service={service}
                    ></ServiceCart>)
                }
            </div>
            <div className='flex justify-center my-10'>
                <button onClick={()=>hanleSeeMore(services)} className='btn btn-warning text-white'>see more</button>
            </div>
        </div>
    );
};

export default Services;