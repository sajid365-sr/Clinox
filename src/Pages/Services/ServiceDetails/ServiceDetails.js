import React from "react";
import { useLoaderData } from "react-router-dom";
import ClientSay from "./ClientSay/ClientSay";
import ServiceInfo from "./ServiceInfo/ServiceInfo";

const ServiceDetails = () => {
  const  service  = useLoaderData();

  return (
    <div>
        <ServiceInfo 
        service={service}
        ></ServiceInfo>
        <ClientSay></ClientSay>
    </div>
  );
};

export default ServiceDetails;
