import React from 'react';
import { NavLink } from 'react-router-dom';
import carHero from '../../assets/images/carHero.png'

const HeroSection = () => {
    return (
        <section class="hero-section">
            <div class="container">
                <div class="row pt-5 pb-5">
                    <div class="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center ">
                        <div>
                            <h3>Learn Create Explore With</h3>
                            <h1> <span class="edu">Edu</span>  <span class="bro">Bro</span>
                            </h1>
                            <div className="card-footer  text-center">
                                <NavLink to="/services" className="btn-grad">View Details</NavLink>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 mt-4 ">
                        <img class="img-fluid" src={carHero} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;