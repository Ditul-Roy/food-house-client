import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';

const Header = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/kq71Kct/bg.jpg")` }}>

                <div className="hero-overlay bg-opacity-60"></div>

                <div className="hero-content text-center text-neutral-content">
            
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello ! wellcome to my website</h1>
                        <p className="mb-5">your first chooice in our recipe house. we are serving clean food and nice behavior.</p>
                        <button className="btn btn-warning">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;