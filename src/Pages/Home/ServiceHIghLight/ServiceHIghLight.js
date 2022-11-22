import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../Services/ServiceCard/ServiceCard";

const ServiceHIghLight = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://clinox.vercel.app/servicesH?dataCount=3")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="my-32">
      <h1 className="text-5xl font-semibold text-[#0E3D4B] text-center my-10">
        Find My Services
      </h1>
      <div className="grid grid-cols-1 w-10/12 lg:w-full lg:grid-cols-3 container mx-auto mb-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center">
        <Link
          to="/services"
          className="text-white hover:scale-95 transition-all ease-out duration-300 bg-[#0E3D4B] hover:bg-[#1d738d] focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm px-5 py-3 text-center "
        >
          View All Services
        </Link>
      </div>
    </div>
  );
};

export default ServiceHIghLight;
