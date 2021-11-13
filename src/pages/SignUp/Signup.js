import React, { useState } from 'react';
import UseAuth from '../../hooks/UseAuth';
import { Link, useHistory, useLocation } from 'react-router-dom';
import google from './../../assets/images/google.png'
const Signup = () => {
    const { allContexts } = UseAuth();
    const { signInWithGoogle, createAccountWithGoogle, setUser, setIsLoading, updateName, sendUserInfoToDb } = allContexts;

    const [error, setError] = useState("")

    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home"

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleGetName = (e) => {

        setName(e.target.value)
    }

    const handleGetEmail = (e) => {

        setEmail(e.target.value)
    }

    const handleGetPassword = (e) => {

        setPassword(e.target.value)
    }



    const handleRegistration = (e) => {
        e.preventDefault();
        createAccountWithGoogle(email, password)
            .then((res) => {
                setIsLoading(true)
                updateName(name)
                setUser(res.user)
                history.push(url)
            })
            .catch((error) => {
                setError(error.message)

            })
            .finally(() => {
                setIsLoading(false)
            })
    }



    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                sendUserInfoToDb(res.user.email)
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            }
            )
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };




    return (

        <div className="contact1 add-service d-flex justify-content-center custom-body my-5">
            <div className="container-contact1 d-flex justify-content-center">
                <div className=" text-center">
                    <div className="">

                        <form onSubmit={handleRegistration} className="contact1-form validate-form">
                            <span className="contact1-form-title">
                                Register
                            </span>

                            <p className="text-danger text-center">{error}</p>
                            <div className="wrap-input1 validate-input">

                                <input className="input1" type="text" onBlur={handleGetName} placeholder="Your Name" />
                                <span className="shadow-input1"></span>
                            </div>
                            <div className="wrap-input1 validate-input" >
                                <input className="input1" type="email" onBlur={handleGetEmail} placeholder="Your Email" />
                                <span className="shadow-input1"></span>
                            </div>
                            <div className="wrap-input1 validate-input" >
                                <input className="input1" type="password" onBlur={handleGetPassword} placeholder="Your Password" />
                                <span className="shadow-input1"></span>
                            </div>

                            <div className="container-contact1-form-btn">
                                <button type='submit' className="contact1-form-btn">
                                    <span>
                                        Signup
                                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>


                        </form>
                        <br />
                        <button className="btn" onClick={handleGoogleLogin}> <img src={google} width="46px" alt="google-icon" /></button>

                        <br />
                        <p> Have a Account Login ?<Link to="/login">Please Login</Link ></p>
                    </div>


                </div>
            </div>
        </div>

    );
};

export default Signup;