import React, { useContext, useState } from 'react';
import { NavLink} from 'react-router-dom';
import { UserContext } from '../../provider/AuthContextProvider';
import { FaList, FaRegWindowClose } from 'react-icons/fa';

const NavigationBar = () => {
    const [open, setOpen] = useState(false);

    const { user, logOut } = useContext(UserContext);

    const handleSignOut = () => {
        logOut();
    }
    return (
        <div>
            <div className="navbar w-full bg-amber-50">
                <div className="navbar-start">
                    <NavLink to='/chef' className='btn btn-ghost text-2xl'>Food House<img className='h-8 w-8' src={'https://i.ibb.co/PW6s02Z/dribbbb.jpg'} alt="" /></NavLink>
                </div>
                <div onClick={() => setOpen(!open)} className=' lg:hidden ms-32'>
                    <span>
                        {open === true ? <FaRegWindowClose className="h-6 w-6 text-blue-500" />
                            : <FaList className="h-6 w-6 text-blue-500" />}
                    </span>
                 </div>   
                    <ul className={`px-1 lg:flex justify-between absolute lg:static duration-500 ${open ? 'top-20 ' : '-top-36'}`}>
                        <div className="navbar-center text-slate-600 lg:flex">
                            <NavLink to="/chef" className={({ isActive }) => (isActive ? 'btn btn-danger me-4' : ' text-xl lg:me-8')} >Home</NavLink>
                            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'btn btn-danger me-4' : ' text-xl lg:me-8')} >Blog</NavLink>
                        </div>
                        <div className="navbar-end lg:flex lg:ms-60">
                            {
                                user ? <>
                                    <img className='h-12 w-12 rounded' title={user.displayName ? user.displayName : ''} src={user.photoURL} alt="" />
                                    <NavLink onClick={handleSignOut} navigate className={({ isActive }) => (isActive ? 'text-blue-600 btn btn-warning' : 'btn btn-warning')} >SignOut</NavLink>
                                </>
                                    : <NavLink to="/login" className={({ isActive }) => (isActive ? ' btn btn-danger' : 'btn btn-warning')}  >Log in</NavLink>
                            }
                        </div>
                    </ul>
            </div>
        </div>
    );
};

export default NavigationBar;