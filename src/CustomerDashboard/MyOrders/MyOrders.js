import React, { useEffect, useState } from 'react';
import UseAuth from '../../hooks/UseAuth';
import './MyOrder.css'
const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { allContexts } = UseAuth()
    const { user } = allContexts
    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email]);



    const handleOrderCancel = id => {
        const proceed = window.confirm('Are you sure you want to Cancel this Order')
        if (proceed) {
            const url = `http://localhost:5000/cancelOrder/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        const remaining = orders?.filter(order => order._id !== id);
                        setOrders(remaining);
                        alert('Remove Your Order Successfully')

                    }
                })
        }
    }

    return (
        < div className="container my-order-container" >
            <div className="text-center pb-3">
                <h1 className="mb-5 text-center pt-5">Your Ordered <span className="text-danger">{orders.length}</span>  Products....!!!!!</h1>
            </div>

            <table className="table table-dark" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ border: "1px solid red" }}>
                        <th  >Product</th>
                        <th >Image</th>
                        <th >Price</th>
                        <th >Status</th>
                        <th >Action</th>
                    </tr>
                </thead>
                {orders?.map((order) => (
                    <tbody>
                        <tr role="row" style={{ border: "2px solid gray" }} >
                            <td>{order.name}</td>
                            <td><img style={{ width: "70px", height: "50px" }} src={order.img} alt="" /></td>
                            <td>{order.price}</td>
                            <td>{order.status}</td>
                            <td> <button
                                className="btn btn-danger"
                                onClick={() => handleOrderCancel(order._id)}
                            >
                                Cancel Order
                            </button></td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div >

    );
};

export default MyOrders;

// <div className="p-2">
//     <h1 className="mt-5 mb-5 text-center pt-5">Total  <span className="text-danger">{orders.length}</span> Order  is Palaced....!!!!!</h1>