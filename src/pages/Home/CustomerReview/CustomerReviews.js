import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './CustomerReviews.css'


const CustomerReviews = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/review`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div className=" bg-dark text-white pb-5 pt-1">
            <div className="text-center pt-5 pb-3">
                <h1 style={{ fontSize: "60px" }}>Customer Reviews</h1>
            </div>
            <hr />
            <Carousel>
                {
                    reviews?.map(
                        review =>
                            <Carousel.Item key={review._id}>

                                <div className="d-flex justify-content-center text-center review-slider">
                                    <div>
                                        <h3 className="color-white">{review?.name}</h3>
                                        <p>  {review?.review}</p>
                                    </div>
                                </div>

                            </Carousel.Item>
                    )
                }

            </Carousel>

        </div>
    );
};

export default CustomerReviews;