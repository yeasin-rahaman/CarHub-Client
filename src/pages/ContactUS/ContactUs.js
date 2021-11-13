import React from 'react';
import './ContactUs.css'

import contactImg from './../../assets/images/contactUS.gif'




const ContactUs = () => {
    return (
        <div>
            <section id="contact ">
                <div className="container custom-body align-items-center  mt-5">
                    <div className="text-center pt-5 pb-3">
                        <h1 style={{ fontSize: "60px" }}>Contact Us</h1>
                    </div>


                    <div className="row mt-5 align-items-center">

                        <div className="col-md-7 d-flex ">

                            <img src={contactImg} className='img-fluid' alt="" />
                        </div>

                        <div className="col-md-5">
                            <h4><strong>Get in Touch</strong></h4>
                            <form>
                                <div className="form-group p-2">
                                    <input type="text" className="form-control" name="" value="" placeholder="Name" />
                                </div>
                                <div className="form-group p-2">
                                    <input type="email" className="form-control" name="" value="" placeholder="E-mail" public />
                                </div>
                                <div className="form-group p-2">
                                    <input type="tel" className="form-control" name="" value="" placeholder="Phone" />
                                </div>
                                <div className="form-group p-2">
                                    <textarea className="form-control" name="" rows="3" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group p-2">
                                    <button className="btn btn-default btn-grad" type="submit" name="button">
                                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Submit
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default ContactUs;

