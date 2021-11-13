import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../hooks/UseAuth';
import './AllOrder.css'





const AllOrders = () => {
    const [orders, setOrders] = useState([])
    const { allContexts } = UseAuth()

    const { register, handleSubmit } = useForm();
    const [orderId, setOrderId] = useState("");
    const { user } = allContexts
    useEffect(() => {
        fetch(`http://localhost:5000/allOrders`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email]);


    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };

    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`http://localhost:5000/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data)
    };





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
                            <td> <form onSubmit={handleSubmit(onSubmit)}>
                                <select
                                    onClick={() => handleOrderId(order?._id)}
                                    {...register("status")}
                                >
                                    <option value={order?.status}>{order?.status}</option>
                                    <option value="approve">approve</option>
                                    <option value="done">Done</option>
                                </select>
                                <input className="btn btn-danger" type="submit" />
                            </form></td>

                        </tr>
                    </tbody>

                ))}
            </table>
        </div>











    );
};


export default AllOrders;