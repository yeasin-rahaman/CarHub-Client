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
            <div className="row row-cols-1 row-cols-md-4 g-4 container mx-auto mt-5" >

                <div className="col">
                    <div className="card h-100 align-items-center hover">
                        <img src={expert} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Expert Engineers</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 align-items-center hover">
                        <img src={onTime} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">On time Delivery</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 align-items-center hover">
                        <img src={experience} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Best Technology</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 align-items-center hover">
                        <img src={techno} className="card-img-top w-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">25 Years Experience</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;