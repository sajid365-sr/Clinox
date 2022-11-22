import React from "react";
import useTitle from "../Shared/SetTitle/Title";
import Banner from "./Banner/Banner";
import ServiceHIghLight from "./ServiceHIghLight/ServiceHIghLight";
import WhyMe from "./WhyMe/WhyMe";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner></Banner>
      <ServiceHIghLight></ServiceHIghLight>
      <WhyMe></WhyMe>
    </div>
  );
};

export default Home;
