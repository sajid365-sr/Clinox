import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../../contexts/AuthContext/AuthContext";
import Review from "./Review/Review";


const MyReviews = () => {
  const { setTitle, user, logOut } = useContext(UserContext);
  const [reviews, setReviews] = useState([]);
  setTitle("My reviews");

  
  useEffect(() => {
    fetch("http://localhost:5000/myReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('Clinox-JW-Token')}`,
      },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          console.log(res)
          return logOut();
        }
        return res.json()})

      .then((data) => {
        
        setReviews(data);
      });
  }, [user, logOut]);

  const deleteReview = (id) => {
    fetch(`http://localhost:5000/deleteReview/${id}`, {
      method: "DELETE",
      headers:{
        authorization: `Bearer ${localStorage.getItem('Clinox-JW-Token')}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          const remain = reviews.filter((review) => review._id !== id);
          setReviews(remain);
          toast.success("Review deleted successfully");
        }
      });
  };

  

  return (
    <div className="h-full lg:h-[70vh] w-11/12 lg:max-w-screen-xl mx-auto my-10">
      {reviews.length === 0 && (
        <h1 className="font-medium tracking-wider text-center text-3xl mb-5">
          No Reviews found
        </h1>
      )}

      {reviews.length > 0 && (
        <h1 className="font-medium tracking-wider text-xl mb-5">
          You have{" "}
          <span className="text-[#0E3D4B] text-2xl font-semibold">
            {reviews.length}
          </span>{" "}
          reviews.
        </h1>
      )}

      {reviews.map((review) => (
        <Review
          key={review._id}
          review={review}
          deleteReview={deleteReview}
         
        ></Review>
      ))}
    </div>
  );
};

export default MyReviews;
