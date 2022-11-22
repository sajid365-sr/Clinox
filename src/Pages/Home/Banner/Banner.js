import React from "react";
import "./Banner.css";
import bacteria from "../../../Assets/Png/bacteria.png";
import bacteria2 from "../../../Assets/Png/bacteria 2.png";
import cleaner from "../../../Assets/Png/cleaner.png";
import lineArrow from "../../../Assets/Png/line-arrow.png";
import line from "../../../Assets/Png/line.png";
import smallCircle from "../../../Assets/Png/small-circle.png";
import textShape from "../../../Assets/Png/text_shape.png";
import cleanMan from "../../../Assets/cleanMan.png";
import expShape from "../../../Assets/Png/exp_shape.png";

const Banner = () => {
  return (
    <div className="homeBg">
      <div className="relative h-full">
        <div className="lg:w-2/5 w-3/4 text-center lg:text-left mx-auto pt-36">
          <p className="tracking-widest">
            <span className="lg:text-6xl text-4xl uppercase font-semibold">
              Professional
            </span>
            <br />
            <span className=" text-3xl lg:text-4xl mr-3 lg:mr-0 relative font-semibold underline underline-offset-8">
              Cleaning
            </span>
            <img
              className="w-1/2 -ml-5 hidden lg:block -mt-10"
              src={textShape}
              alt=""
            />
            <span className="text-2xl ">Services</span>
          </p>
          <p className="mt-5">
            Nor is there anyone who loves or pursues or desires itself is pain,
            but <br />
            occasionally home cleaning service
          </p>
          <button className="bg-[#0E3D4B] lg:px-10 px-7 flex items-center text-white mt-5 py-4 rounded-full">
            Get In Touch
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
            </svg>
          </button>
        </div>
        <div className="text-center absolute lg:bottom-28 right-1/3 bottom-20 lg:right-24">
          <h1 className="lg:text-7xl text-5xl font-semibold">05</h1>
          <span className="text-gray-500">Years of experience</span>
        </div>
        <img
          className="absolute w-14 lg:w-auto top-1/2 right-16"
          src={bacteria}
          alt=""
        />
        <img
          className="absolute w-24 lg:w-auto top-20 lg:top-1/4 lg:right-28"
          src={bacteria2}
          alt=""
        />
        <img src={cleaner} className="absolute top-24 cleaner left-80" alt="" />
        <img
          src={line}
          className="absolute hidden lg:block top-5 left-0"
          alt=""
        />
        <img
          src={lineArrow}
          className="absolute bottom-1/4 lg:right-1/3"
          alt=""
        />
        <img
          src={smallCircle}
          className="absolute right-64 top-24 lg:top-36"
          alt=""
        />
        <img
          src={cleanMan}
          className="hidden lg:block absolute w-1/3 top-8 cleanMan"
          alt=""
        />
        <img
          src={expShape}
          className="absolute w-48 lg:w-auto expShape lg:bottom-08 lg:right-14 right-36 bottom-6"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
