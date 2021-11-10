import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import logo from './../../assets/images/logo.png'
import { NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import './header.css'

const Header = () => {
    const { allContexts, } = UseAuth()
    const { user, logOut } = allContexts
    const { displayName, } = user;
    return (
        <div>
            <Navbar bg="light" expand="lg" className="myHeader">
                <Container>
                    <Nav.Link as={NavLink} to="/home"><Navbar.Brand href="#home"> <img src={logo} alt="" /></Navbar.Brand></Nav.Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>

                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>

                            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>

                            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>

                            <Nav.Link as={NavLink} to="/customerDashboard">Customer Dashboard</Nav.Link>
                            <Nav.Link as={NavLink} to="/admin">Admin Panel</Nav.Link>


                            {!displayName ? (<><Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>

                                <Nav.Link as={NavLink} to="/login">Log in</Nav.Link></>) : (
                                <>

                                    <Nav.Link className='text-danger' ><h4>{displayName}</h4></Nav.Link>
                                    <button className='btn btn-primary' onClick={logOut}> log out</button></>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;