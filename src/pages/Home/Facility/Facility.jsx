import React from 'react';
import { FaCoffee, FaHospitalAlt, FaHotel } from 'react-icons/fa';

const Facility = () => {
    return (
        <div className='my-10 mx-10 text-center'>
           <h1 className='text-3xl text bold text-amber-800 text-center'>Our facility</h1> 
           <p>we are provide facilities of customer</p>
           <div className='lg:flex justify-around my-10'>
            <p className=''><FaCoffee className='text-8xl ms-16'></FaCoffee><span className='text-xl text-center text-xl'>We are serving clean coffee</span></p>
            <p><FaHotel className='text-8xl '></FaHotel><span className='text-center sm:ms-10'>Our own hotel</span></p>
            <p><FaHospitalAlt className='text-8xl ms-10'></FaHospitalAlt><span className='text-center text-xl'>We have own hospital</span></p>
           </div>
        </div>
    );
};

export default Facility;