import { Rating } from "flowbite-react";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
import addReview from "../../../../Assets/addReview.png";
import { UserContext } from "../../../../contexts/AuthContext/AuthContext";

const AddReview = ({ service }) => {
  const { _id, serviceName } = service;
  const { user } = useContext(UserContext);
  const location = useLocation();

  const [name, SetName] = useState("");
  const [feedback, SetFeedback] = useState("");
  const [address, SetAddress] = useState("");
  const [ratings, SetRatings] = useState(0);

  const defaultName = (event) => {
    event.target.value = user.displayName;
  };

  const defaultEmail = (event) => {
    event.target.value = user.email;
  };

  const handleName = (e) => {
    SetName(e.target.value);
  };
  const handleFeedback = (e) => {
    SetFeedback(e.target.value);
  };
  const handleAddress = (e) => {
    SetAddress(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const review = {
      name,
      photo: user.photoURL,
      feedback,
      address,
      ratings,
      email: user.email,
      id: _id,
      serviceName,
    };

    fetch("https://clinox.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Thanks for your feedback");
        }
      });

    event.target.reset();
  };

  return (
    <div className="container bg-gray-800 w-11/12 lg:w-full rounded-lg mx-auto my-20">
      <div className="flex lg:flex-row flex-col-reverse">
        <div className="mx-auto lg:w-1/2">
          <img src={addReview} alt="" />
        </div>

        <div className="lg:p-16 p-10 w-full mx-auto lg:w-1/2 text-white">
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-5"
          >
            {/* Name Field */}
            <div className="relative bg-gray-600 px-5 py-2 rounded-lg z-0 mb-6 w-full group">
              <input
                onBlur={handleName}
                type="text"
                name="floating_name"
                id="floating_name"
                className="block pt-3 px-5 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#155c72] focus:border-b-3 peer"
                placeholder=" "
                required
                onClick={user && defaultName}
              />
              <label
                htmlFor="floating_name"
                className="peer-focus:font-medium absolute text-base text-gray-200  duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
              >
                Full Name
              </label>
            </div>
            {/* Email Field */}
            <div className="relative bg-gray-600 px-5 py-2 rounded-lg z-0 mb-6 w-full group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block pt-3 px-5 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#155c72] focus:border-b-3 peer"
                placeholder=" "
                required
                onClick={user && defaultEmail}
                readOnly
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-base text-gray-200  duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
              >
                Email
              </label>
            </div>
            {/* Feedback Field */}
            <div className="relative bg-gray-600 px-5 py-2 rounded-lg z-0 mb-6 w-full group">
              <textarea
                onBlur={handleFeedback}
                rows={5}
                type="text"
                name="floating_comment"
                id="floating_comment"
                className="block pt-5 px-5 w-full text-base text-white bg-transparent border-0  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#155c72] focus:border-b-3 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_comment"
                className="peer-focus:font-medium absolute text-base text-gray-200  duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
              >
                Feedback
              </label>
            </div>

            {/* Address Field */}
            <div className="relative bg-gray-600 px-5 py-2 rounded-lg z-0 mb-6 w-full group">
              <input
                onBlur={handleAddress}
                type="text"
                name="floating_address"
                id="floating_address"
                className="block pt-3 px-5 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#155c72] focus:border-b-3 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_address"
                className="peer-focus:font-medium absolute text-base text-gray-200  duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
              >
                Address
              </label>
            </div>

            {/* Ratings */}
            <div>
              <p className="text-center mb-3">Want to rate our service?</p>
              <Rating className="justify-center gap-3">
                {[...new Array(5).keys()].map((star) => (
                  <span
                    key={star}
                    className="scale-125"
                    onClick={() => SetRatings(star + 1)}
                  >
                    <Rating.Star filled={false} />
                  </span>
                ))}
              </Rating>
            </div>
            {user?.uid ? (
              <button
                type="submit"
                className="text-white bg-[#116680] hover:bg-[#18738f] focus:ring-2 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-sm w-full mt-8 px-5 py-2.5 text-center "
              >
                Send Feedback
              </button>
            ) : (
              <p className="text-center tracking-wider">
                Please{" "}
                <Link
                  to="/login"
                  className="underline text-blue-600"
                  state={{ from: location }}
                  replace
                >
                  Login
                </Link>{" "}
                to add review
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
