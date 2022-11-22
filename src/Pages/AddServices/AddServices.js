import { Rating } from "flowbite-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useTitle from "../Shared/SetTitle/Title";

const AddServices = () => {
  useTitle("Add services");

  const navigate = useNavigate();

  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState();
  const [sRate, setSRate] = useState();
  const [ratings, setRatings] = useState();
  const [customer, setCustomer] = useState();
  const [serviceCharge, serServiceCharge] = useState();
  const [picture, setPicture] = useState();

  const handleName = (event) => {
    setServiceName(event.target.value);
  };

  const handleImage = (event) => {
    setPicture(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleDuration = (event) => {
    setDuration(event.target.value);
  };

  const handleSRate = (event) => {
    setSRate(event.target.value);
  };

  const handleRatings = (event) => {
    setRatings(event.target.value);
  };

  const handleCustomer = (event) => {
    setCustomer(event.target.value);
  };

  const handleServiceCharge = (event) => {
    serServiceCharge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceData = {
      serviceCharge: `$${serviceCharge}`,
      picture,
      duration,
      ratings,
      satisfactionRate: sRate,
      customer,
      serviceName,
      about: description,
    };

    fetch("https://clinox.vercel.app/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("New services added successfully");
          navigate("/services");
        }
      });
  };

  return (
    <div className="max-w-screen-lg mx-auto my-[7%] pt-10 pb-20 px-16 rounded-lg bg-gray-800">
      <h1 className="text-white text-center mb-8 text-4xl">
        Let's add a new service
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="relative z-0 mb-6 w-full group">
          <input
            onBlur={handleName}
            type="text"
            name="floating_service_name"
            id="floating_service_name"
            className="block pt-3 px-5 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#155c72] focus:border-b-4 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_service_name"
            className="peer-focus:font-medium absolute text-base text-gray-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Service Name
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            onBlur={handleImage}
            type="text"
            name="floating_image"
            id="floating_image"
            className="block pt-3 px-5 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#155c72] focus:border-b-4 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_image"
            className="peer-focus:font-medium absolute text-base text-gray-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Service Image URL
          </label>
        </div>

        <div className="relative z-0 mb-6 w-full group">
          <textarea
            onBlur={handleDescription}
            rows={5}
            type="text"
            name="floating_description"
            id="floating_description"
            className="block pt-5 px-5 w-full text-base text-white bg-transparent border-3 rounded-lg  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#155c72] focus:border-4 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_description"
            className="peer-focus:font-medium absolute text-base text-gray-200  duration-300 transform -translate-y-6 scale-75 top-5 left-5 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            Description
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              onBlur={handleDuration}
              type="number"
              name="floating_duration"
              id="floating_duration"
              className="block pt-3 px-5 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#155c72] focus:border-b-4 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="floating_duration"
              className="peer-focus:font-medium absolute text-xl text-gray-200  duration-300 transform -translate-y-0 scale-75 top-3 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-sm peer-focus:-translate-y-8"
            >
              Duration (days)
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              onBlur={handleSRate}
              type="number"
              name="floating_sRate"
              id="floating_sRate"
              className="block pt-3 px-5 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#155c72] focus:border-b-4 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_sRate"
              className="peer-focus:font-medium absolute text-base text-gray-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Satisfaction Rate (%)
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              onBlur={handleRatings}
              type="number"
              name="floating_ratings"
              id="floating_ratings"
              className="block pt-3 px-5 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#155c72] focus:border-b-4 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_ratings"
              className="peer-focus:font-medium absolute text-base text-gray-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              <div className="flex gap-2">
                <span>Ratings</span>
                <Rating>
                  (<Rating.Star filled={false}></Rating.Star>)
                </Rating>
              </div>
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              onBlur={handleCustomer}
              type="number"
              name="floating_customer"
              id="floating_customer"
              className="block pt-3 px-5 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#155c72] focus:border-b-4 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_customer"
              className="peer-focus:font-medium absolute text-base text-gray-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Customer
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              onBlur={handleServiceCharge}
              type="number"
              name="floating_serviceCharge"
              id="floating_serviceCharge"
              className="block pt-3 px-5 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#155c72] focus:border-b-4 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_serviceCharge"
              className="peer-focus:font-medium absolute text-base text-gray-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              ($) Service Charge
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="text-white mt-10 bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
          Add Services
        </button>
      </form>
    </div>
  );
};

export default AddServices;
