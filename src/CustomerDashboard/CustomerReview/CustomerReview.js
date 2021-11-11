import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from '../../hooks/UseAuth';


const CustomerReview = () => {
    const { register, handleSubmit } = useForm();

    const { allContexts } = UseAuth()
    const { user } = allContexts

    const onSubmit = (data) => {
        fetch("http://localhost:5000/addSReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => (result));
        alert('review added')
    };
    return (
        <div>
            <div className="text-center pt-5 pb-3">
                <h1 style={{ fontSize: "60px" }}>Review</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className='w-50'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="wrap-input1 validate-input " data-validate="Name is required">
                            <input className="input1 w-50" value={user.displayName} {...register("name")} />
                        </div>

                        <div className="wrap-input1 validate-input" data-validate="Message is required">
                            <textarea className="input1 w-50" placeholder="Description"{...register("review",)} />
                            <span className="shadow-input1"></span>
                        </div>
                        <div className="container-contact1-form-btn">
                            <button type='submit' className="contact1-form-btn">
                                <span>
                                    Post review
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;