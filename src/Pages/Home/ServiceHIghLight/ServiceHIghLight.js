
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Services/ServiceCard/ServiceCard';

const ServiceHIghLight = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/servicesH?dataCount=3')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setServices(data);
        })
    }, [])
    return (
        <div>
            <h1 className='text-4xl font-semibold text-[#0E3D4B] text-center my-10'>Let's have a look!!</h1>
            <div className='grid grid-cols-1 w-10/12 lg:w-full lg:grid-cols-3 container mx-auto mb-10'>
            {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
            </div>
            <div className='text-center'>
            <Link
              to='/services'
              class="text-white bg-[#0E3D4B] hover:bg-[#1d738d] focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm px-5 py-3 text-center "
            >
              View All Services
            </Link>
            </div>
        </div>
    );
};

export default ServiceHIghLight;