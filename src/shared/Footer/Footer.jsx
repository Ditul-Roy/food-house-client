import React from 'react';
import { FaFacebook, FaGooglePay, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='grid lg:grid-cols-4 p-10'>
                <div>
                    <p className='text-xl text-center'>food house</p>
                    <p className='text-slate-400 text-center'>we are present healthy and best food for you.</p>
                </div>
                <div>
                    <h1 className='text-xl text-center'>Our facility</h1>
                    <ul className='text-slate-400 text-center'>
                        <li>beutifull place</li>
                        <li>nice behavior</li>
                        <li>crean serving</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl text-center'>Sales Procedures</h1>
                    <ul className='text-slate-400 text-center'>
                        <li>home delivary</li>
                        <li>cash on delivary</li>
                        <li>direct sale</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl text-center'>Our Address</h2>
                    <p className='text-slate-400 text-center'>Chourasta, Thakurgaon Rangpur</p>
                    <p className='text-slate-400 text-center'>Phone: 0100000000000</p>
                    <p className='text-slate-400 text-center'>email: foodHouse@gmail.com</p>
                </div>
            </div>
            <div className='text-center pb-10'>
                <p className='text-xl'>follow with us on</p>
                <div className='flex items-center justify-center py-8 text-slate-400'>
                    <FaFacebook className='me-4 h-8 w-8'></FaFacebook>
                    <FaInstagram className='me-4 h-8 w-8'></FaInstagram>
                    <FaTwitter className='me-4 h-8 w-8'></FaTwitter>
                    <FaGooglePay className='me-4 h-8 w-8'></FaGooglePay>
                </div>
            </div>
            <div className='text-slate-400 text-center'>Copyright © 2012 - 2023 TermsFeed®. All rights reserved.</div>
        </div>
    );
};

export default Footer;