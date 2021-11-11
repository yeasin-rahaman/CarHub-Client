import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import UseAuth from '../../hooks/UseAuth';


const PlaceOrder = () => {

    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams({});
    const { allContexts } = UseAuth()
    const { user } = allContexts
    const [selected, setSelected] = useState({});



    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setSelected(data)
                // reset(data)

            });
    }, [id, reset]);

    const onSubmit = data => {
        data.userName = user.displayName
        data.email = user.email
        data.status = 'Pending'

        fetch(`http://localhost:5000/addOrders`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                // reset(result)
                alert('order confirmed')
            });

    };



    return (
        <div className="container custom-body mt-5">
            <div className='row  align-items-center'>
                <div className=" col-md-6">
                    <div className="card custom-cart mb-3">
                        <img src={selected.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h1 className="card-title">{selected.name}</h1>
                            <p className="card-text">{selected.desc}</p>
                        </div>
                    </div>
                </div>


                <div className='col-md-6 add-service d-flex justify-content-center'>
                    <form onSubmit={handleSubmit(onSubmit)} className="contact1-form validate-form">

                        <span className="contact1-form-title">
                            Order
                        </span>
                        <div className="wrap-input1 validate-input" data-validate="Name is required">
                            {/* <input className="input1" value={selected.name} {...register("name")} /> */}
                            <input className="input1" type="text" defaultValue={selected.name} placeholder="Name" {...register("name", { required: true, })} />
                        </div>

                        <div className="wrap-input1 validate-input" data-validate="Subject is required">
                            <input className="input1" type="number" defaultValue={selected.price} placeholder="price" {...register("price", { required: true, })} />
                        </div>

                        <div className="wrap-input1 validate-input" data-validate="Message is required">
                            <input className="input1" type="text" defaultValue={selected.desc} placeholder="Name" {...register("desc", { required: true, })} />
                        </div>
                        <div className="wrap-input1 validate-input" data-validate="Message is required">
                            <input className="input1" type="text" defaultValue={selected.img} placeholder="Name" {...register("img", { required: true, })} />
                        </div>
                        <div className="wrap-input1 validate-input" data-validate="Name is required">
                            <input className="input1" type="text" placeholder="Please Provide your address" {...register("address", { required: true, })} />
                        </div>

                        <div className="container-contact1-form-btn">
                            <button type='submit' className="contact1-form-btn">
                                <span>
                                    Order Now
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>

            </div >
        </div>
    );
};


export default PlaceOrder;

