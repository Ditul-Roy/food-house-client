import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='min-height-full'>
            <div id="error-page">
                <img src={'https://i.ibb.co/TBRkGyw/404-landing-page-free-vector.jpg'} alt="" />
                <div className='text-center'>
                    <h1 className='text-6xl text-bold text-white mb-10'>Oops!</h1>
                    <p className='text-4xl text-green-600'>Sorry, no matched location</p>
                    <p className='text-4xl tex-white'>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
                <div className='flex justify-center my-12 py-12'>
                    <Link className='btn btn-warning' to='/chef'>Back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;