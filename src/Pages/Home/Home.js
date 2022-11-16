import React from "react";
import Banner from "./Banner/Banner";
import "./Home.css";
import ServiceHIghLight from "./ServiceHIghLight/ServiceHIghLight";
import WhyMe from "./WhyMe/WhyMe";


const Home = () => {
 

  return (
   <div>
     <Banner></Banner>
     <ServiceHIghLight></ServiceHIghLight>
     <WhyMe></WhyMe>
   </div>
  );
};

export default Home;
