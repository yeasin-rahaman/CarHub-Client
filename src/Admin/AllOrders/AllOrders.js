import React, { useEffect, useState } from 'react';
import UseAuth from '../../hooks/UseAuth';
import spinner from './../../assets/Infinity-1s-200px.svg'





const AllOrders = () => {
    const [orders, setOrders] = useState([])
    const { allContexts } = UseAuth()
    const { user } = allContexts
    useEffect(() => {
        fetch(`http://localhost:5000/allOrders`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.uid]);

    console.log(orders);
    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    orders.length === 0 ?
                        <div className=" justify-content-center w-100 d-flex">
                            <img src={spinner} alt="" />
                        </div>
                        :

                        orders.map(orders => <div className="col" key={orders._id} >
                            <div className="card custom-cart h-100 hover">
                                <img src={orders.img} className="img-fluid rounded-start w-100" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Product Name {orders.name}</h5>
                                    <h2>User email {orders.email}</h2>
                                    <p className="card-text">{orders.desc}</p>
                                </div>
                                <div className="card-footer  text-center">
                                    <h5 className="text-warning p-2">Price $: {orders.price}</h5>


                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div >
    );
};

export default AllOrders;