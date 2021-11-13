import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../hooks/UseAuth';
import './AllOrder.css'





const AllOrders = () => {
    const [orders, setOrders] = useState([])
    const { allContexts } = UseAuth()

    const [status, setStatus] = useState('')
    const { user } = allContexts
    useEffect(() => {
        fetch(`http://localhost:5000/allOrders`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email]);


    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/statusUpdate/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('update')
    }

    const handleSelectValue = (e) => {
        setStatus(e.target.value)
    }



    console.log(orders);
    return (

        < div className="container all-order-container" >
            <div className="text-center pb-3">
                <h1 className="mb-5 text-center pt-5">Your Ordered <span className="text-danger">{orders.length}</span>  Products....!!!!!</h1>
            </div>

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
                    </tr>
                </thead>
                {orders?.map((order, index) => (
                    <tbody key={order._id}>
                        <tr role="row" style={{ border: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{order.name}</td>
                            <td><img style={{ width: "70px", height: "50px" }} src={order.img} alt="" /></td>
                            <td>{order.price}</td>
                            <td>{order.email}</td>
                            <td>{order.address}</td>
                            <td> <div >
                                <select onChange={handleSelectValue} className="pending p-2 ">
                                    <option defaultValue={order.status}>{order.status}</option>
                                    <option defaultValue="approved">approved</option>
                                    <option defaultValue="pending">Delivered</option>
                                    <option defaultValue="pending">Cancelled</option>
                                </select>
                            </div>
                                <button className="btn btn-danger" onClick={() => handleUpdate(order._id)}>update</button>
                            </td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div >











    );
};


export default AllOrders;