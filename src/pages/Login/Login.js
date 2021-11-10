import React from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from "react-router-dom";
import UseAuth from './../../hooks/UseAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import google from './../../assets/images/google.png'
import github from './../../assets/images/github.png'
import './Login.css'


const Login = () => {
    const { allContexts } = UseAuth()
    const { signInWithGoogle, signInWithGitHub, signInWithEmail, error, getPassword, getEmail, setUser,
        setError } = allContexts;

    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || "/home";

    return (


        <div className="text-center custom-body my-5">
            <h2>Please Login</h2>
            <p className=" mt-2">Login with Email & Password</p>
            <p className="text-danger text-center">{error}</p>
            <div className="row">
                <div className="col-md-3 col-10 mx-auto">
                    <div>
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="email" visuallyHidden>
                                    Your Email Address
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                    </InputGroup.Text>
                                    <FormControl onBlur={getEmail} type="email" autoComplete="current-email" id="email" placeholder="Enter your email address"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="text-start">
                                <Form.Label htmlFor="password" visuallyHidden>
                                    Your Password
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                    </InputGroup.Text>
                                    <FormControl onBlur={getPassword} type="password" autoComplete="current-password" id="password" placeholder="Enter your password" />
                                </InputGroup>
                            </Col>
                        </Row>

                        <button type="" onClick={() => {
                            signInWithEmail()
                                .then((result) => {
                                    const user = result.user;
                                    setUser(user);
                                    history.push(redirect);
                                })
                                .catch((err) => {
                                    const errorMessage = err.message;
                                    setError(errorMessage);
                                });
                        }} className="btn btn-grad mt-2 w-100 btn-grad">
                            Login
                        </button>
                    </div>

                </div>
            </div>
            <p className="mt-2">
                <NavLink className="text-decoration-none" to="/signup">
                    Need an Account? Please Sign up!
                </NavLink>
            </p>
            <p className="mt-3">Or</p>
            <p> Login with</p>
            <div>
                <button onClick={() => {
                    signInWithGoogle()
                        .then((result) => {
                            const user = result.user;
                            setUser(user);
                            history.push(redirect);
                        })
                        .catch((err) => {
                            const errorMessage = err.message;
                            setError(errorMessage);
                        });
                }} className="btn">
                    <img src={google} width="46px" alt="google-icon" />
                </button>
                <button onClick={() => {
                    signInWithGitHub()
                        .then((result) => {
                            const user = result.user;
                            setUser(user);
                            history.push(redirect);
                        })
                        .catch((err) => {
                            const errorMessage = err.message;
                            setError(errorMessage);
                        });
                }} className="btn">
                    <img width="55px" src={github} alt="github-icon" />
                </button>
            </div>
        </div>
    );
};

export default Login;





