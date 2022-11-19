import { Card, Rating } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  const { _id, ratings, serviceCharge, serviceName, picture } = service;

  return (
    <div>
      <div className="max-w-sm mb-8">
        <Card className="shadow-xl">
          <PhotoProvider
           speed={() => 800}
           easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
          >
          <PhotoView src={picture}>
            <img className="rounded-lg scale-105 cursor-pointer hover:scale-110 transition-all duration-500" src={picture} title='Click to photo view' style={{ objectFit: "cover" }} alt="" />
          </PhotoView>
          </PhotoProvider>

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
            <Link
              to={`/services/${_id}`}
              className="text-white hover:scale-95 transition-all ease-out duration-300 bg-[#0E3D4B] hover:bg-[#1d738d] focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
            >
              View Details
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ServiceCard;
