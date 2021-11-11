import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import expert from '../../../assets/images/expert.png'
import onTime from '../../../assets/images/on-time.png'
import experience from '../../../assets/images/experience.png'
import techno from '../../../assets/images/best techno.png'

const About = () => {
    return (
        <div>
            <div className="text-center pt-5 pb-3">
                <h1 style={{ fontSize: "60px" }}>How We Work</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-4 container mx-auto mt-5" >

                <div class="col">
                    <div class="card h-100 align-items-center hover">
                        <img src={expert} class="card-img-top w-50" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Expert Engineers</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 align-items-center hover">
                        <img src={onTime} class="card-img-top w-50" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">On time Delivery</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 align-items-center hover">
                        <img src={experience} class="card-img-top w-50" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Best Technology</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 align-items-center hover">
                        <img className="img-fluid" src={techno} class="card-img-top w-50" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">25 Years Experience</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;