import React, { useContext } from "react";
import { UserContext } from "../../contexts/AuthContext/AuthContext";
import Banner from "./Banner/Banner";
import "./Home.css";
import ServiceHIghLight from "./ServiceHIghLight/ServiceHIghLight";
import WhyMe from "./WhyMe/WhyMe";


const Home = () => {
 
  const {setTitle} = useContext(UserContext);
  setTitle('Home')

  return (
   <div>
     <Banner></Banner>
     <ServiceHIghLight></ServiceHIghLight>
     <WhyMe></WhyMe>
   </div>
  );
};

export default Home;
