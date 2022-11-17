
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div>
            <h1 className='text-4xl font-semibold text-[#0E3D4B] text-center my-10'>Explore My Services</h1>
            <div className='grid grid-cols-3 container mx-auto mb-10'>
            {
                services.map(service => <ServiceCard
                key={service.id}
                service={service}
                ></ServiceCard>)
            }
            </div>
        </div>
    );
};

export default Services;