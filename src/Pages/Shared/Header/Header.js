import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo-3.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMailOpen, HiOutlineSearch } from "react-icons/hi";

const Header = () => {
  return (
    <div>
      <nav class="bg-white border-gray-200 my-3 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link to="/">
            <img src={logo} class="mr-3 scale-150 sm:h-9" alt="Clinox Logo" />
          </Link>
          <div class="flex gap-16 items-center">
            {/* Email */}
            <div className="flex gap-3 items-center">
              <div>
                <HiMailOpen className="text-5xl text-gray-600"></HiMailOpen>
              </div>
              <div>
                <p>Email Me</p>
                <p className="text-gray-500 hover:underline hover:cursor-pointer">info@clinox.com</p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex gap-3 items-center">
              <div>
                <FaPhoneAlt className="text-4xl text-gray-600"></FaPhoneAlt>
              </div>
              <div>
                <p>Free Call</p>
                <a
                  href="tel:5541251234"
                  class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
                >
                  (+555) 412-1234
                </a>
              </div>
            </div>
            <div>
              <Link to="/login">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#0E3D4B] to-[#0E3D4B]  hover:text-white dark:text-white focus:ring-4 focus:outline-none">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Login
                  </span>
                </button>
              </Link>
        
              <Link
                to="/signup"
                
              >
                 <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#0E3D4B] to-[#0E3D4B]  hover:text-white dark:text-white focus:ring-4 focus:outline-none">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    SignUp
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <nav>
        <div class=" bg-[#0E3D4B] text-white py-6 my-3 rounded-lg  mx-auto max-w-screen-xl md:px-6">
          <div class="flex justify-between px-8 items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-16 text-lg font-medium">
              <li>
                <Link to="/home">Home +</Link>
              </li>
              <li>
                <Link to="/services">Services +</Link>
              </li>
              <li>
                <Link to="/blog">Blog +</Link>
              </li>
            </ul>
            <div>
                
                <HiOutlineSearch className="text-2xl"></HiOutlineSearch>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
