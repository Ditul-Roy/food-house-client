import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../provider/AuthContextProvider';
import { FaList, FaRegWindowClose } from 'react-icons/fa';

const NavigationBar = () => {
    const [open, setOpen] = useState(false);

    const { user, logOut } = useContext(UserContext);

    const navigate = useNavigate()
    const handleSignOut = () => {
        logOut();
        <Navigate to="/chef"></Navigate>
    }
    return (
        <div>
            <div className="navbar w-full bg-amber-50">
                <div className="navbar-start">
                    <Link to='/chef' className="btn btn-ghost normal-case text-2xl ">Food House</Link>
                </div>
                <div onClick={() => setOpen(!open)} className=' lg:hidden ms-32'>
                    <span>
                        {open === true ? <FaRegWindowClose className="h-6 w-6 text-blue-500" />
                            : <FaList className="h-6 w-6 text-blue-500" />}
                    </span>
                 </div>   
                    <ul className={`px-1 lg:flex justify-between absolute lg:static duration-500 ${open ? 'top-20 ' : '-top-36'}`}>
                        <div className="navbar-center text-slate-600 lg:flex">
                            <Link to="/chef" className='text-wite text-xl lg:me-8'>Home</Link>
                            <Link to="/blog" className='text-wite text-xl lg:me-8'>Blog</Link>
                        </div>
                        <div className="navbar-end lg:flex sm:me-32">
                            {
                                user ? <>
                                    <img className='h-12 w-12 rounded' title={user.displayName} src={user.photoURL} alt="" />
                                    <Link onClick={handleSignOut} navigate className='btn btn-warning'>SignOut</Link>
                                </>
                                    : <Link to="/login" className='btn btn-warning'>Log in</Link>
                            }
                        </div>
                    </ul>
            </div>
        </div>
    );
};

export default NavigationBar;