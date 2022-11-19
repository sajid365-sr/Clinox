import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo-3.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMailOpen, HiOutlineSearch } from "react-icons/hi";
import { UserContext } from "../../../contexts/AuthContext/AuthContext";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

const Header = () => {
  const { user, logOut } = useContext(UserContext);

  const signOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 my-3 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link to="/">
            <img
              src={logo}
              className="mr-3 lg:scale-150 sm:h-9"
              alt="Clinox Logo"
            />
          </Link>
          <div className="flex gap-16 items-center">
            {/* Email */}
            <div className="lg:flex hidden lg:gap-3 items-center">
              <div>
                <HiMailOpen className="lg:text-5xl text-3xl text-gray-600"></HiMailOpen>
              </div>
              <div>
                <p>Email Me</p>
                <p className="text-gray-500 hover:underline hover:cursor-pointer">
                  info@clinox.com
                </p>
              </div>
            </div>
            {/* Phone */}
            <div className="lg:flex hidden gap-3 items-center">
              <div>
                <FaPhoneAlt className="text-4xl text-gray-600"></FaPhoneAlt>
              </div>
              <div>
                <p>Free Call</p>
                <a
                  href="tel:5541251234"
                  className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
                >
                  (+555) 412-1234
                </a>
              </div>
            </div>
            <div>
              <>
                {user?.uid ? (
                  <Navbar fluid={true} rounded={true}>
                    <div className="flex md:order-2">
                      <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={
                          user?.photoURL ? (
                            <Avatar
                              status="online"
                              bordered={true}
                              alt=""
                              img={user?.photoURL}
                              rounded={true}
                            />
                          ) : (
                            <Avatar
                              rounded={true}
                              status="online"
                              bordered={true}
                            />
                          )
                        }
                      >
                        <Dropdown.Header>
                          <span className="block text-sm">
                            {user?.displayName}
                          </span>
                          <span className="block truncate text-sm font-medium">
                            {user?.email}
                          </span>
                        </Dropdown.Header>

                        <Dropdown.Item>Settings</Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Item onClick={signOut}>
                          Sign out
                        </Dropdown.Item>
                      </Dropdown>
                    </div>
                  </Navbar>
                ) : (
                  <>
                    <Link to="/login">
                      <button className="relative inline-flex items-center justify-center p-0.5 lg:mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#0E3D4B] to-[#0E3D4B]  hover:text-white dark:text-white focus:ring-4 focus:outline-none">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Login
                        </span>
                      </button>
                    </Link>

                    <Link to="/signup">
                      <button className="relative inline-flex items-center justify-center p-0.5 lg:mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#0E3D4B] to-[#0E3D4B]  hover:text-white dark:text-white focus:ring-4 focus:outline-none">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          SignUp
                        </span>
                      </button>
                    </Link>
                  </>
                )}
              </>
            </div>
          </div>
        </div>
      </nav>

      
        <Navbar className="bg-[#0E3D4B] mx-auto w-11/12 max-w-screen-xl text-white py-1 lg:py-5" fluid={true} rounded={true}>
          <Navbar.Toggle />
          <Navbar.Collapse>
            
            <Link className="mb-3 lg:mb-0 ml-5 lg:ml-auto lg:bg-inherit bg-[#10586e] px-3  lg:px-0 py-1 lg:py-0" to="/home">
              <li>Home</li>
            </Link>
            <Link  className="mb-3 lg:mb-0 ml-5 lg:ml-auto lg:bg-inherit bg-[#10586e] px-3  lg:px-0 py-1 lg:py-0" to="/services">
              <li>Services</li>
            </Link>
            <Link  className="mb-3 lg:mb-0 ml-5 lg:ml-auto lg:bg-inherit bg-[#10586e] px-3  lg:px-0 py-1 lg:py-0" to="/blog">
              <li>Blog</li>
            </Link>
            {user?.uid && (
              <>
                <Link to='/addServices'  className="mb-3 lg:mb-0 ml-5 lg:ml-auto lg:bg-inherit bg-[#10586e] px-3  lg:px-0 py-1 lg:py-0">
                  <li>Add Services +</li>
                </Link>

                <Link to='/myReviews'  className="mb-3 lg:mb-0 ml-5 lg:ml-auto lg:bg-inherit bg-[#10586e] px-3  lg:px-0 py-1 lg:py-0">
                  <li>My Review</li>
                </Link>
              </>
            )}
            <div className="mr-5 hidden lg:block lg:mr-0">
              <HiOutlineSearch className="text-2xl"></HiOutlineSearch>
            </div>
            
          </Navbar.Collapse>
        </Navbar>
    </div>
  );
};

export default Header;
