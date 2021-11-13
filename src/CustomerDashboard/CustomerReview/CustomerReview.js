import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from '../../hooks/UseAuth';


const CustomerReview = () => {
    const { register, handleSubmit } = useForm();

    const { allContexts } = UseAuth()
    const { user } = allContexts

    const onSubmit = (data) => {
        fetch("https://secure-coast-41570.herokuapp.com/addSReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => (result));
        alert('review added')
    };
    return (
        <div className="container custom-body mt-5 d-flex justify-content-center">
            <div>
                <div className="text-center pt-5 pb-3 ">
                    <h1 style={{ fontSize: "60px" }}>Review</h1>
                </div>

                <div className='col-md-6 add-service d-flex justify-content-center w-100'>
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="contact1-form validate-form">

                        <div className="wrap-input1 validate-input " data-validate="Name is required">
                            <input className="input1 " value={user.displayName} {...register("name")} />
                        </div>

                        <div className="wrap-input1 validate-input" data-validate="Message is required">
                            <textarea className="input1 " placeholder="Description"{...register("review",)} />
                            <span className="shadow-input1"></span>
                        </div><div className="wrap-input1 validate-input " data-validate="Name is required">
                            <input className="input1 " min="1" max="5" placeholder="rating" type="number" {...register("rating")} />
                        </div>

                        <div className="container-contact1-form-btn">
                            <button type='submit' className="contact1-form-btn">
                                <span>
                                    Post Review
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </div >
    );
};

export default CustomerReview;