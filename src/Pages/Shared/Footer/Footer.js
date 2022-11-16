import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo-3.svg";
import google from "../../../Assets/google-play.png";
import apple from "../../../Assets/apple-store.png";
import { FaTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import './Footer.css';

const Footer = () => {
  return (
    
      <footer className="bg-[#0e3d4bb7] text-white">
        
        <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4 container mx-auto">
          <div className="flex flex-col gap-8">
            <div className="text-start">
             
              <img src={logo} alt="Clinox logo" />
              
              <span className="uppercase text-xs font-semibold tracking-widest">Cleaning Services</span>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit
              sed eveniet amet iste libero repellendus autem fuga molestias
              quisquam.
            </div>
            <div className="flex gap-3 justify-between">
              <img className="w-1/2 hover:cursor-pointer hover:-translate-y-2 transition-all ease-in-out duration-300" src={google} alt="Google Play" />
              <img className="w-1/2 hover:cursor-pointer hover:-translate-y-2 transition-all ease-in-out duration-300" src={apple} alt="Apple Store" />
            </div>
          </div>
          <div className="ml-10">
            <h2 className="mb-10 text-xl  font-semibold uppercase text-white">
              Site map
            </h2>
            <ul className="text-white">
              <li className="mb-4">
                
                <Link to="/home" data-replace="Home"><span>Home</span></Link>
              </li>
              <li className="mb-4">
                
                <Link to="/services" data-replace="Services"><span>Services</span></Link>
              </li>
              <li className="mb-4">
                
                <Link to="/blog" data-replace="Blog"><span>Blog</span></Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-10 text-xl  font-semibold text-white">
              Help center
            </h2>
            <ul className="text-white">
              <li className="mb-4">
               <Link data-replace="Twitter"><span>Twitter</span></Link>
              </li>
              <li className="mb-4">
              <Link data-replace="Facebook"><span>Facebook</span></Link>
              </li>
              <li className="mb-4">
              <Link data-replace="Contact Us"><span>Contact Us</span></Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-10 text-xl  font-semibold text-white">
              Legal
            </h2>
            <ul className="text-white">
              <li className="mb-4 hover:translate-x-2 transition-all ease-in duration-300">
                
                <Link data-replace="Privacy Policy"><span>Privacy Policy</span></Link>
              </li>
              <li className="mb-4 hover:translate-x-2 transition-all ease-in duration-300">
          
                <Link data-replace="Terms &amp; Conditions"><span>Terms &amp; Conditions</span></Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 px-4 items-center bg-[#0E3D4B]">
          <div className="container mx-auto md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-200 text-center">
            © 2022 Clinox All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <FaFacebook className="text-3xl hover:text-[#17a8d4] hover:scale-90 transition-all ease-in duration-75 cursor-pointer"></FaFacebook>
            <FaTwitter className="text-3xl hover:text-[#17a8d4] hover:scale-90 transition-all ease-in duration-75 cursor-pointer"></FaTwitter>
            <FaLinkedinIn className="text-3xl hover:text-[#17a8d4] hover:scale-90 transition-all ease-in duration-75 cursor-pointer"></FaLinkedinIn>
            <BsInstagram className="text-3xl hover:text-[#17a8d4] hover:scale-90 transition-all ease-in duration-75 cursor-pointer"></BsInstagram>
          </div>
          </div>
        </div>
       
      </footer>
    
  );
};

export default Footer;
