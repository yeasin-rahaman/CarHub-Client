import React from 'react';
import getInTouch from './../../../assets/images/allCars.jpg'
import './GetInTouch.css'

const GetInTouch = () => {
    return (
        <div className="py-5">

            <div className="text-center pt-5 pb-3">
                <h1 style={{ fontSize: "60px" }}>Get in Touch</h1>
            </div>

            <div className="card  my-5 h-50 text-center my-auto mt-5 mb-5 border-0" >
                <img src={getInTouch} className="card-img  patient-img" alt="..." />
                <div className="card-img-overlay container custom-card ">
                    <div id="subscribe" className="container d-flex justify-content-center bg-panda-header align-items-center rounded-3 text-center">

                        <div>

                            <h2 className="text-white"> Get updates on sales specials and more</h2>
                            <br />
                            <input className="form-control input-panda" type="text" placeholder="Your email" />
                            <br />
                            <button className="btn btn-danger">Submit</button>
                        </div>

                    </div>

                </div>
            </div>



        </div >
    );
};

export default GetInTouch;