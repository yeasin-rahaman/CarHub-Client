import { useEffect, useState } from 'react';

const UseServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://secure-coast-41570.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])


    return { services, setServices }
};

export default UseServices;