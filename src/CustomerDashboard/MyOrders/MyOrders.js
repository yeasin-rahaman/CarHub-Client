import React, { useEffect, useState } from 'react';
import UseAuth from '../../hooks/UseAuth';

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
        <div className="container text-black mb-5" >
            <div className="text-center pb-3">
                <h1 className="mb-5 text-center pt-5">Your Ordered <span className="text-danger">{orders.length}</span>  Products....!!!!!</h1>

            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">



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
                                <tr key={order._id}>
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


            </div>
        </div>

    );
};

export default MyOrders;

// <div className="p-2">
//     <h1 className="mt-5 mb-5 text-center pt-5">Total  <span className="text-danger">{orders.length}</span> Order  is Palaced....!!!!!</h1>