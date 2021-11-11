import React, { useEffect, useState } from 'react';
import UseAuth from '../../hooks/UseAuth';
import spinner from './../../assets/Infinity-1s-200px.svg'


const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { allContexts } = UseAuth()
    const { user } = allContexts
    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email]);

    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="text-center pt-5 pb-3">
                <h1 style={{ fontSize: "60px" }}>Your Order</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    // orders.length === 0 ?
                    //     <div className=" justify-content-center w-100 d-flex">
                    //         <img src={spinner} alt="" />
                    //     </div>
                    //     :

                    <table className="table mt-5 table-dark">
                        <thead>
                            <tr>
                                <th className="text-light text-left" scope="col">Sr No</th>
                                <th className="text-light" scope="col">image</th>
                                <th className="text-light" scope="col">Service Name</th>
                                <th className="text-light" scope="col">Price</th>
                                <th className="text-light" scope="col">Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) =>

                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td><img style={{ width: "70px", height: "50px" }} src={order.img} alt="" /></td>
                                        <td>{order.name}</td>

                                        <td>{order.price} $</td>
                                        <td>{order.status}</td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                }
            </div>
        </div>

    );
};

export default MyOrders;

// <div className="p-2">
//     <h1 className="mt-5 mb-5 text-center pt-5">Total  <span className="text-danger">{orders.length}</span> Order  is Palaced....!!!!!</h1>