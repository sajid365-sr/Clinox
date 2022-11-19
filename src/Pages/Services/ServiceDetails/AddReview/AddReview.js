import { Rating } from "flowbite-react";
import React, { useContext } from "react";
import addReview from "../../../../Assets/addReview.png";
import { UserContext } from "../../../../contexts/AuthContext/AuthContext";

const AddReview = () => {
  const { user } = useContext(UserContext);

  const setName = (event) => {
    event.target.value = user.displayName;
  };

  const setEmail = (event) => {
    event.target.value = user.email;
  };

  const ratingsCount = (star) =>{
    console.log(star)
  }

  return (
    <div className="container bg-gray-800 w-11/12 lg:w-full rounded-lg mx-auto my-20">
      <div className="flex lg:flex-row flex-col-reverse">
        <div className="mx-auto lg:w-1/2">
          <img src={addReview} alt="" />
        </div>

        <div className="lg:p-24 p-10  mx-auto lg:w-1/2 text-white">
          <form action="" className="flex flex-col gap-5">
            <div className="relative bg-gray-600 px-5 py-2 rounded-lg z-0 mb-6 w-full group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block pt-3 px-5 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#0E3D4B] peer"
                placeholder=" "
                required
                onClick={setName}
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-base text-gray-200  duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
              >
               Full Name
              </label>
            </div>

            <div className="relative bg-gray-600 px-5 py-2 rounded-lg z-0 mb-6 w-full group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block pt-3 px-5 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#0E3D4B] peer"
                placeholder=" "
                required
                onClick={setEmail}
                readOnly
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-base text-gray-200  duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
              >
               Email
              </label>
            </div>

            <div className="relative bg-gray-600 px-5 py-2 rounded-lg z-0 mb-6 w-full group">
              <textarea
                rows={5}
                type="text"
                name="floating_comment"
                id="floating_comment"
                className="block pt-5 px-5 w-full text-base text-white bg-transparent border-0  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#0E3D4B] peer"
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


            <div className="relative bg-gray-600 px-5 py-2 rounded-lg z-0 mb-6 w-full group">
              <input
                type="text"
                name="floating_address"
                id="floating_address"
                className="block pt-3 px-5 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#0E3D4B] peer"
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
            <div>
              <p>Want to rate our service?</p>
              <Rating>
            {
             [...new Array(5).keys()].map(star => <span onClick={() => ratingsCount(star+1)}>
               <Rating.Star  filled={false} />
               
             </span>  )
            }
              </Rating>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
