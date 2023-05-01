import React from 'react';
import bg from '../../assets/wholesomeyum-Chef-Salad-Recipe-16.jpg'
import './Header.css'
import NavigationBar from '../NavigationBar/NavigationBar';

const Header = () => {
    return (
        <div className='header w-full '>
            <NavigationBar></NavigationBar>
                <h3 className='mx-96 my-24 text-4xl text-white'>hello from food house</h3>
        </div>
    );
};

export default Header;