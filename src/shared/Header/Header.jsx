import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Marquee from 'react-fast-marquee';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-2'>
            <div className='flex lg:px-8 p-4'>
                <button className='btn btn-warning text-white'>Your First choice</button>
                <Marquee className='text-white'>
                    wallcome ! to our resturent, we will try our best service provide to you.
                </Marquee>
            </div>
            <NavigationBar></NavigationBar>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/kq71Kct/bg.jpg")` }}>

                <div className="hero-overlay bg-opacity-60"></div>

                <div className="hero-content text-center text-neutral-content">

                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello ! wellcome to my website</h1>
                        <p className="mb-5">your first chooice in our recipe house. we are serving clean food and nice behavior.</p>
                        <p className='py-4'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                        <Link to='/login'><button className="btn btn-warning">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;