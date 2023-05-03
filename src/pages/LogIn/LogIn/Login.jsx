import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../provider/AuthContextProvider';
import Swal from 'sweetalert2';
import { FaGithubAlt, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { loggedInUserWithEmail, userWithGoogle, userWithGithub } = useContext(UserContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/chef'

    const handleLoggedIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (!email, !password) {
            Swal.fire({
                title: 'Error!',
                text: 'please fulfil to the all input field',
                icon: 'error',
                confirmButtonText: 'Cool',
            })
        }

        loggedInUserWithEmail(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire(
                    'Good job!',
                    'wow ! succesfully log in !',
                    'success'
                );
                form.reset();
                navigate(from)
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const hangleLoginGoogle = () => {
        userWithGoogle()
        .then(result => {
            console.log(result);
        })
        .catch(error => setError(error.message))
    }

    const handleLoginGithub = () =>{
        userWithGithub()
        .then(result => {
            console.log(result.user);
            Swal.fire(
                'Good job!',
                'wow ! succesfully sign up !',
                'success'
            );
        })
        .catch(error => setError(error.message))
    }

    return (
        <Form onSubmit={handleLoggedIn} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered"required />
                            <p><small>{error}</small></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <p><small>Don`t have an account! please <Link to='/signup'>SignUp</Link></small></p>
                        </div>
                        <p className='text-center'>or</p>
                        <hr />
                        <p onClick={hangleLoginGoogle} className='btn btn-warning'><FaGoogle></FaGoogle>google</p>
                        <p onClick={handleLoginGithub} className='btn btn-warning'><FaGithubAlt></FaGithubAlt>github</p>
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default Login;