
import { Card, Rating } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

    const {id, ratings, serviceCharge, serviceName, picture} = service;
    console.log(service)

    return (
        <div>
            
            <div className="max-w-sm">
  <Card
    className='p-5 mb-8 shadow-xl'
    imgSrc= {picture}
    
    
  >
    
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {serviceName}
      </h5>
    
    <div className="mt-2.5 mb-5 flex items-center">
      
      {/* Ratings */}

      <Rating>
  <Rating.Star />
  <Rating.Star />
  <Rating.Star />
  <Rating.Star />
  <Rating.Star filled={false} />
</Rating>
      
      
     
      <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
       {ratings}
      </span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-900 dark:text-white">
        {serviceCharge}
      </span>
      <Link to={`/services/${id}`} class="text-white bg-[#0E3D4B] hover:bg-[#1d738d] focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">View Details</Link>
    </div>
  </Card>
</div>
        </div>
    );
};
 

export default ServiceCard;