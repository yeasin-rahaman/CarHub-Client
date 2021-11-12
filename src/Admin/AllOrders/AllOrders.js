import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
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
    }, [user?.email]);

    console.log(orders);
    return (

        <div className="p-2">
            <h1 className=" mb-5 text-center mt-5 ">Total <span className="text-danger">{orders.length}</span> Order  is Palaced....!!!!!</h1>

            <table className="table table-dark">
                <thead>
                    <tr>
                        <th className="text-light text-left" scope="col">Sr No</th>
                        <th className="text-light" scope="col">Image</th>
                        <th className="text-light" scope="col">Service Name</th>
                        <th className="text-light" scope="col">Price</th>
                        <th className="text-light" scope="col">User</th>

                        <th className="text-light" scope="col">Status</th>
                        <th className="text-light" scope="col">Change Status</th>
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
                                <td>{order.email} $</td>
                                <td>{order.status}</td>
                                <td><button className="btn btn-danger">Approve</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>











    );
};


export default AllOrders;