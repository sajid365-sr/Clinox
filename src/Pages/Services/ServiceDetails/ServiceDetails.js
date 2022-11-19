import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../../../contexts/AuthContext/AuthContext";
import AddReview from "./AddReview/AddReview";
import ClientSay from "./ClientSay/ClientSay";
import ServiceInfo from "./ServiceInfo/ServiceInfo";

const ServiceDetails = () => {
  const  service  = useLoaderData();
  const {setTitle} = useContext(UserContext);

  setTitle(`Service details (${service.serviceName})`)

  return (
    <div>
        <ServiceInfo 
        service={service}
        ></ServiceInfo>
        <ClientSay
        service={service}
        ></ClientSay>
        <AddReview
        service={service}
        ></AddReview>
    </div>
  );
};

export default ServiceDetails;
