import React from 'react';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import allCars from './../../assets/images/getInTouch.gif'
import './Services.css'
import spinner from './../../assets/Infinity-1s-200px.svg'



const Services = () => {
    const { services } = UseAuth()
    return (
        <div>
            <div className="row">
                <div className="">
                    <div className="card  my-5 h-50 text-center my-auto mb-5 border-0" >
                        <img src={allCars} className="card-img  patient-img" alt="..." />
                        <div className="card-img-overlay container custom-card ">
                            <div id="subscribe" className="container d-flex justify-content-center bg-panda-header align-items-center rounded-3 text-center">

                                <div>
                                    <div className="text-center pt-5 pb-3">
                                        <h1 className="text-white" style={{ fontSize: "60px" }}>All Cars</h1>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div >
            </div>
            <h2>{services.desc}</h2>
            <div className="container text-black mt-5 mb-5" >
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.length === 0 ?
                            <div className=" justify-content-center w-100 d-flex">
                                <img src={spinner} alt="" />
                            </div>
                            :

                            services.map(service => <div className="col" key={service._id} >
                                <div className="card custom-cart h-100 hover">
                                    <img src={service.img} className="img-fluid rounded-start w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{service.name}</h5>
                                        <p className="card-text">{service.desc}</p>
                                    </div>
                                    <div className="card-footer  text-center">
                                        <h5 className="text-warning p-2">Price $: {service.price}</h5>
                                        <NavLink to={`/placeOrder/${service._id}`} className="btn btn-danger btn-lg px-5 text-light   rounded-pill btn-block">BUY</NavLink>

                                    </div>
                                </div>
                            </div>)
                    }

                </div>
            </div >
        </div>
    );
};

export default Services;