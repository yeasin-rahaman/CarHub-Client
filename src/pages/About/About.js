import React from 'react';
import about from './../../assets/images/about.jpg'
const About = () => {
    return (
        <div>
            <div className="about-container custom-body">
                <div className="d-flex mt-5 justify-content-center">
                    <h1 className="edu">About Us </h1>
                </div><section className="hero-banner py-5 mt-5">
                    <div className="container">
                        <div className="row row align-items-center">
                            <div className="col-lg-5 offset-lg-1 order-lg-1">
                                <img src={about} className="img-fluid" alt="Web Development" />
                            </div>
                            <div className="col-lg-6">
                                <h1 className="mt-3">About Our Tourist Guides</h1>
                                <p className=" my-5">Tour guides, or tourist guides, are members of the hospitality and travel industry who show visitors around places of interest. Tour guides may lead groups or individuals through historical sites, museums, geographic destinations and on outdoor excursions. Typically, tour guides posses relevant cultural, historical and practical knowledge they can share with tourists. Companies and organizations often hire guides to provide a worthwhile experience for guests, guides may possess exceptional knowledge and skill about their chosen destination, culture or recreational activity.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;