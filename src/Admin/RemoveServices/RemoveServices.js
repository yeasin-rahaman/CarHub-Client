import React, { useEffect, useState } from 'react';


const RemoveServices = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://secure-coast-41570.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handelDelete = id => {
        const proceed = window.confirm('Are you sure you want to DELETE this service')
        if (proceed) {
            const url = `https://secure-coast-41570.herokuapp.com/services/${id}`
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = services?.filter(service => service._id !== id);
                        setServices(remaining);

                    }

                })
        }
    }


    return (
        <div>
            <div className="row">
            </div>
            <div className="d-flex mt-5 justify-content-center "><h1>Services</h1></div>
            <div className="container text-black mt-5 mb-5" >
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {services.map(service => <div className="col" key={service.key} >
                        <div className="card h-100 hover custom-cart">
                            <img src={service.img} className="img-fluid rounded-start w-100" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                <p className="card-text">{service.desc}</p>
                            </div>
                            <div className="card-footer  text-center">
                                <button className="btn btn-danger" onClick={() => handelDelete(service._id)}>Remove</button>
                            </div>
                        </div>
                    </div>)
                    }

                </div>
            </div >
        </div>

    );
};

export default RemoveServices;












