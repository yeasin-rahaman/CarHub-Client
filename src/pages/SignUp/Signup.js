import React from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UseAuth from './../../hooks/UseAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import google from './../../assets/images/google.png'
import github from './../../assets/images/github.png'

const Signup = () => {
    const { allContexts } = UseAuth();
    const { signUp, getEmail, getPassword, getName, error, signInWithGoogle, signInWithGitHub } = allContexts;

    return (

        <div className="text-center my-5 custom-body">
            <h2>Please Sign Up</h2>
            <p className=" mt-2">Signup with Email & Password</p>
            <p className="text-danger text-center">{error}</p>
            <div className="row">
                <div className="col-md-3 col-10 mx-auto">
                    <div >
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="email" visuallyHidden>
                                    Your User Name
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                    </InputGroup.Text>
                                    <FormControl required onBlur={getName} type="text" autoComplete="current-email" id="email" placeholder="Enter your Name"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>

                            <Col className="text-start">
                                <Form.Label htmlFor="email" visuallyHidden>
                                    Your Email Address
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                    </InputGroup.Text>
                                    <FormControl required onBlur={getEmail} type="email" autoComplete="current-email" id="email" placeholder="Enter your email address"
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
                                    <FormControl required onBlur={getPassword} type="password" autoComplete="current-password" id="password" placeholder="Enter your password" />
                                </InputGroup>
                            </Col>
                        </Row>
                        <button onClick={signUp} className="btn mt-2 btn-grad  w-100">
                            Login
                        </button>
                    </div>
                </div>
            </div>
            <p className="mt-2">
                <NavLink className="text-decoration-none" to="/login">
                    Already have a account ? Please Login!
                </NavLink>
            </p>
            <p className="mt-3">Or</p>
            <p>Sign Up</p>
            <div>
                <button onClick={signInWithGoogle} className="btn">
                    <img src={google} width="46px" alt="google-icon" />
                </button>
                <button onClick={signInWithGitHub} className="btn">
                    <img width="55px" src={github} alt="github-icon" />
                </button>
            </div>
        </div>
    );
};

export default Signup;