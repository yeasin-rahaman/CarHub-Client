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
    }, [user?.uid]);

    console.log(orders);
    return (
        // <div className="container text-black mt-5 mb-5" >
        //     <div className="row row-cols-1 row-cols-md-3 g-4">
        //         {
        //             orders.length === 0 ?
        //                 <div className=" justify-content-center w-100 d-flex">
        //                     <img src={spinner} alt="" />
        //                 </div>
        //                 :

        //                 orders.map(orders => <div className="col" key={orders._id} >
        //                     <div className="card custom-cart h-100 hover">
        //                         <img src={orders.img} className="img-fluid rounded-start w-100" alt="..." />
        //                         <div className="card-body">
        //                             <h5 className="card-title">Product Name {orders.name}</h5>
        //                             <h2>User email {orders.email}</h2>
        //                             <p className="card-text">{orders.desc}</p>
        //                         </div>
        //                         <div className="card-footer  text-center">
        //                             <h5 className="text-warning p-2">Price $: {orders.price}</h5>


        //                         </div>
        //                     </div>
        //                 </div>)
        //         }
        //     </div>
        // </div >




        <div className="p-2">
            <h1 className="mt-5 mb-5 text-center pt-5">Total  <span className="text-danger">{orders.length}</span> Order  is Palaced....!!!!!</h1>

            <table className="table mt-5 table-dark">
                <thead>
                    <tr>
                        <th className="text-light text-left" scope="col">Sr No</th>
                        <th className="text-light" scope="col">Image</th>
                        <th className="text-light" scope="col">Service Name</th>
                        <th className="text-light" scope="col">Price</th>
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