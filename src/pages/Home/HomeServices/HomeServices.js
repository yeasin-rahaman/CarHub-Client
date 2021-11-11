import React from 'react';

import { NavLink } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';
import spinner from './../../../assets/Infinity-1s-200px.svg'

const HomeServices = () => {
    const { services } = UseAuth()
    const homeServices = services.slice(0, 6)
    return (
        <div className="py-5">
            <div className="d-flex mt-5 justify-content-center "><h1>Packages</h1></div>
            <h2>{services.desc}</h2>
            <div className="container text-black mt-5 mb-5" >
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        services.length === 0 ?
                            <div className=" justify-content-center w-100 d-flex">
                                <img src={spinner} alt="" />
                            </div>
                            :

                            homeServices?.map(service => <div className="col" key={service._id} >
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

export default HomeServices;