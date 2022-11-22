import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Shared/SetTitle/Title";
import AddReview from "./AddReview/AddReview";
import ClientSay from "./ClientSay/ClientSay";
import ServiceInfo from "./ServiceInfo/ServiceInfo";

const ServiceDetails = () => {
  const service = useLoaderData();

  useTitle(`Service details (${service.serviceName})`);

  return (
    <div>
      <ServiceInfo service={service}></ServiceInfo>

      <ClientSay service={service}></ClientSay>

      <AddReview service={service}></AddReview>
    </div>
  );
};

export default ServiceDetails;
