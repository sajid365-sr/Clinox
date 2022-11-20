import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../../contexts/AuthContext/AuthContext";
import Review from "./Review/Review";

const MyReviews = () => {
  const { setTitle, user } = useContext(UserContext);
  const [reviews, setReviews] = useState([]);
  setTitle("My reviews");
  console.log(reviews);
  useEffect(() => {
    fetch("http://localhost:5000/userEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: user?.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [user]);

  const deleteReview = (id) => {
    fetch(`http://localhost:5000/deleteReview/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          const remain = reviews.filter((review) => review._id !== id);
          setReviews(remain);
          toast.success('Review deleted successfully')
        }
      });
  };

  return (
    <div className="h-[70vh] max-w-screen-xl mx-auto my-10">
      <h1 className="font-medium tracking-wider text-xl mb-5">
        You have{" "}
        <span className="text-[#0E3D4B] text-2xl font-semibold">
          {reviews.length}
        </span>{" "}
        reviews.
      </h1>
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
