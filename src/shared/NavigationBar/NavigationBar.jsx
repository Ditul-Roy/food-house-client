import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <div className="navbar w-full bg-amber-50">
                <div className="navbar-start">
                    <Link to='/chef' className="btn btn-ghost normal-case text-2xl">Food House</Link>
                </div>
                <div className="navbar-center text-slate-600 lg:flex">
                    <Link to="/chef" className='text-wite text-xl me-8'>Home</Link>
                    <Link className='text-wite text-xl me-8'>login</Link>
                    <Link className='text-wite text-xl me-8'>Blog</Link>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className='btn btn-warning'>Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;