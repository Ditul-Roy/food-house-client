import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <div id="error-page">
                <img src={'https://i.ibb.co/TBRkGyw/404-landing-page-free-vector.jpg'} alt="" />
                <div className='text-center'>
                    <h1 className='text-6xl text-bold text-red-600 mb-10'>Oops!</h1>
                    <p className='text-4xl text-red-800'>Sorry, no matched location</p>
                    <p className='text-4xl text-red-800'>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;