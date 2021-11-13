import React from 'react';
import about from './../../assets/images/about.jpg'
const About = () => {
    return (
        <div>
            <div className="about-container custom-body">
                <div className="text-center pt-5 pb-3">
                    <h1 style={{ fontSize: "60px" }}>About Us</h1>
                </div>
                <section className="hero-banner py-5 mt-5">
                    <div className="container">
                        <div className="row row align-items-center">
                            <div className="col-lg-5 offset-lg-1 order-lg-1">
                                <img src={about} className="img-fluid" alt="Web Development" />
                            </div>
                            <div className="col-lg-6">
                                <h1 className="mt-3">About Our Car Services</h1>
                                <p className=" my-5">Founded in 1954, Arnold Clark is the UK's largest independently owned, family-run car retailer. We pride ourselves on offering customer service of the highest level, as well as the best choice and biggest discounts on all new cars, nearly new cars, used cars, new vans and used vans.

                                    We guarantee the UK’s best used car deals – if you find a better deal elsewhere on the same car, we will give you back double the difference. And with low rate finance and no hidden fees, the price you see is the price you pay.

                                    You can buy your next used car online safely, with Click & Collect and home delivery options available.

                                    The Arnold Clark Group also provides servicing, MOTs, parts, Motability, rental and business vehicle leasing..</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;