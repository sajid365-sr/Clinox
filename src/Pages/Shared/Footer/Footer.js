import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo-3.svg";
import google from "../../../Assets/google-play.png";
import apple from "../../../Assets/apple-store.png";
import { FaTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    
      <footer class="bg-white dark:bg-gray-900 ">
        
        <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4 container mx-auto">
          <div className="flex flex-col gap-8">
            <div className="text-start">
              <Link to='/'>
              <img src={logo} alt="Clinox logo" />
              </Link>
              <span className="uppercase text-xs font-bold">Cleaning Services</span>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit
              sed eveniet amet iste libero repellendus autem fuga molestias
              quisquam.
            </div>
            <div className="flex gap-3 justify-between">
              <img className="w-1/2 hover:cursor-pointer" src={google} alt="Google Play" />
              <img className="w-1/2 hover:cursor-pointer" src={apple} alt="Apple Store" />
            </div>
          </div>
          <div className="ml-10">
            <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
              Site map
            </h2>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <Link to="/home">Home</Link>
              </li>
              <li class="mb-4">
                <Link to="/services">Services</Link>
              </li>
              <li class="mb-4">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
              Help center
            </h2>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Twitter
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Facebook
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
              Legal
            </h2>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <Link class="hover:underline">Privacy Policy</Link>
              </li>
              <li class="mb-4">
                <Link class="hover:underline">Terms &amp; Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        <div class="py-6 px-4 bg-gray-100 items-center dark:bg-gray-700  ">
          <div className="container mx-auto md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2022 Clinox All Rights
            Reserved.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <FaFacebook className="text-2xl hover:text-[#0E3D4B] cursor-pointer"></FaFacebook>
            <FaTwitter className="text-2xl hover:text-[#0E3D4B] cursor-pointer"></FaTwitter>
            <FaLinkedinIn className="text-2xl hover:text-[#0E3D4B] cursor-pointer"></FaLinkedinIn>
            <BsInstagram className="text-2xl hover:text-[#0E3D4B] cursor-pointer"></BsInstagram>
          </div>
          </div>
        </div>
       
      </footer>
    
  );
};

export default Footer;
