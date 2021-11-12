import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import UseAuth from '../../hooks/UseAuth';
import spinner from './../../assets/Infinity-1s-200px.svg'
import './AllOrder.css'





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

        <div className="p-2 all-order-container">
            <h1 className=" mb-5 text-center mt-5 ">Total <span className="text-danger">{orders.length}</span> Order  is Palaced....!!!!!</h1>

            <table className="table table-dark" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ border: "1px solid red" }}>

                        <th >Number</th>
                        <th >Product</th>
                        <th >Image</th>
                        <th >Price</th>
                        <th >User Email</th>
                        <th >User Address</th>
                        <th >Status</th>
                        <th >Update</th>

                    </tr>
                </thead>
                {orders?.map((order, index) => (
                    <tbody>
                        <tr role="row" style={{ border: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{order.name}</td>
                            <td><img style={{ width: "70px", height: "50px" }} src={order.img} alt="" /></td>
                            <td>{order.price}</td>
                            <td>{order.email}</td>
                            <td>{order.address}</td>
                            <td>{order.status}</td>
                            <td> <button className="btn btn-danger">Cancel Order</button></td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>











    );
};


export default AllOrders;