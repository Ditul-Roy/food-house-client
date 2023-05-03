import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../provider/AuthContextProvider';

const NavigationBar = () => {
    const {user, logOut } = useContext(UserContext);
    const navigate = useNavigate()
    const handleSignOut = () =>{
        logOut();
        navigate('/chef')
    }
    return (
        <div>
            <div className="navbar w-full bg-amber-50">
                <div className="navbar-start">
                    <Link to='/chef' className="btn btn-ghost normal-case text-2xl">Food House</Link>
                </div>
                <div className="navbar-center text-slate-600 lg:flex">
                    <Link to="/chef" className='text-wite text-xl me-8'>Home</Link>
                    <Link className='text-wite text-xl me-8'>Blog</Link>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <img className='h-12 w-12 rounded' title={user.displayName} src={user.photoURL} alt="" />
                            <Link onClick={handleSignOut} className='btn btn-warning'>SignOut</Link>
                        </>
                         : <Link to="/login" className='btn btn-warning'>Log in</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;