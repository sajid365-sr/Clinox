import React from "react";
import { useLoaderData } from "react-router-dom";
import './ServiceDetails.css';

const ServiceDetails = () => {
  const {
    _id,
    about,
    customer,
    duration,
    highlights,
    picture,
    satisfactionRate,
    serviceName,
  } = useLoaderData();

  return (
    <div className="container  mx-auto my-20">
      <div className="flex">
        <div className="p-24 w-3/5 sDetails text-gray-300">
         <div className="aboutContainer">
         <h1 className="text-4xl text-white font-semibold mb-8">{serviceName}</h1>
          <p>{about}</p>
         </div>

          <div className="flex justify-between items-center">
            <div className="highlightContainer">
              <h1 className="text-3xl text-white font-medium mt-10 mb-6">
                Hightlights
              </h1>
              <div>
                {highlights.map((feature) => (
                  <li>{feature}</li>
                ))}
              </div>
              <p className="mt-5 text-xl">Within <span className="text-4xl text-orange-400 text-semibold">{duration}</span> days</p>
            </div>
            <div className="flex gap-5 flex-col justify-center items-center">
              <div className="text-center">
                <p className="text-4xl hover:bg-[#0E3D4B] text-orange-400 border mb-2 rounded-full py-1 hover:cursor-default">
                  {satisfactionRate} %{" "}
                </p>
                <p className="text-sm tracking-widest">
                  Satisfaction Rate
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl text-orange-400 border mb-2 px-4 rounded-full py-2 hover:bg-[#0E3D4B] hover:cursor-default">
                  {customer} +
                </p>
                <p className="text-sm tracking-widest">Happy Customer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <img className="h-full rounded-tr-2xl rounded-br-2xl" src={picture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
