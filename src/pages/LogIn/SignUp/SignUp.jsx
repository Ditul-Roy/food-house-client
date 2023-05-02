import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { UserContext } from '../../../provider/AuthContextProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const { createUserWithEmail } = useContext(UserContext);
    const [error, setError] = useState(null);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photourl = form.photo.value; 
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('please provide an upper case')
            Swal.fire({
                title: 'Oooops!',
                text: 'please provide an upper case',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
        else if (!/(?=.*[!#$%&? "])/.test(password)) {
            setError('please provide a special churrecter')
            Swal.fire({
                title: 'Oooops!',
                text: 'please provide a special churrecter',
                icon: 'error',
                confirmButtonText: 'Cool',
            })
        }
        else if(password.length < 6){
            setError('please provide at least 6 currecter')
            Swal.fire({
                title: 'Oooops!',
                text: 'please provide at least 6 churrecter',
                icon: 'error',
                confirmButtonText: 'Cool',
            })
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
                updateUserNamePhoto(result.user, name, photourl)
            })
            .catch(error => {
                console.log(error);
            })
    }
    const updateUserNamePhoto = (user, name, photourl) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photourl
        })
        .then(()=>{
            alert('succesfully update')
        })
        .catch(error=>console.log(error))
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
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;