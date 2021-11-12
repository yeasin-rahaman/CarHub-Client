import React from 'react';
import { NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="d-flex justify-content-center align-items-center ">
                        <div>
                            <div id="home" style={{ height: '700px' }} className="row align-items-center d-flex  justify-content-start px-5 my-5 py-5">
                                <div className=" text-center my-5 py-5 ">
                                    <h1 className="text-light  display-1">
                                        <Typewriter
                                            options={{
                                                strings: ["Best Car Provider"],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">


                <NavLink to="/services" className="btn btn-danger btn-lg p-4 text-light  col-md-2 rounded-pill btn-block" >More Cars <i className="fas fa-angle-double-right"></i> </NavLink>

            </div>
        </section>
    );
};

export default HeroSection;