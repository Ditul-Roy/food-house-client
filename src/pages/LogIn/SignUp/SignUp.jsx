import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { UserContext } from '../../../provider/AuthContextProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithubAlt, FaGoogle } from 'react-icons/fa';

const SignUp = () => {
    const { createUserWithEmail, userWithGoogle, userWithGithub } = useContext(UserContext);
    const [error, setError] = useState(null);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photourl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('');

        if (!/(?=.*[A-Z])/.test(password)) {
            Swal.fire({
                title: 'Oooops!',
                text: 'please provide an upper case',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            return;
        }
        else if (!/(?=.*[!#$%&? "])/.test(password)) {
            Swal.fire({
                title: 'Oooops!',
                text: 'please provide a special churrecter',
                icon: 'error',
                confirmButtonText: 'Cool',
            })
            return;
        }
        else if (password.length < 6) {
            Swal.fire({
                title: 'Oooops!',
                text: 'please provide at least 6 churrecter',
                icon: 'error',
                confirmButtonText: 'Cool',
            })
            return;
        }
        createUserWithEmail(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                Swal.fire(
                    'Good job!',
                    'wow ! succesfully sign up !',
                    'success'
                );
                form.reset();
                setError('')
                updateUserNamePhoto(result.user, name, photourl)
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const updateUserNamePhoto = (user, name, photourl) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photourl
        })
            .then(() => {
                toast("Wow updated successfylly!")
            })
            .catch(error => setError(error.message))
    }

    const hangleSignUpGoogle = () => {
        userWithGoogle()
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

    const handleSignUpGithub = () =>{
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
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                </div>
                <Form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="url" name="photo" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <p><small>{error}</small></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">SignUp</button>
                            <p><small>Already have an account! please <Link to='/login'>login</Link></small></p>
                        </div>
                        <p className='text-center'>or</p>
                        <hr />
                        <p onClick={hangleSignUpGoogle} className='btn btn-warning'><FaGoogle></FaGoogle>google</p>
                        <p onClick={handleSignUpGithub} className='btn btn-warning'><FaGithubAlt></FaGithubAlt>github</p>
                    </div>
                </Form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;