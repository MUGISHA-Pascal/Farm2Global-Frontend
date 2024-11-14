import React, { useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md"; // Import the star icon

const StarRating = () => {
  const [rating, setRating] = useState(0); // Holds the selected rating
  const [hover, setHover] = useState(0); // Holds the hover effect rating

  // Function to send the rating to the backend
  //   const sendRatingToBackend = async (ratingValue) => {
  //     try {
  //       const response = await fetch("https://your-backend-url.com/api/ratings", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ rating: ratingValue }), // Send rating in the request body
  //       });

  //       if (response.ok) {
  //         console.log("Rating submitted successfully!");
  //       } else {
  //         console.error("Failed to submit rating");
  //       }
  //     } catch (error) {
  //       console.error("Error submitting rating:", error);
  //     }
  //   };

  // Toggle rating: if the user clicks the same rating, it de-rates to zero
  const handleRating = (value: number) => {
    const newRating = value === rating ? 0 : value; // Toggle rating
    setRating(newRating);
    // sendRatingToBackend(newRating); // Send the updated rating to the backend
  };

  return (
    <div className="flex space-x-2">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        return (
          <MdOutlineStarPurple500
            key={index}
            className={`cursor-pointer max-md:text-[12px] transition-colors duration-200 ${
              starValue <= (hover || rating)
                ? "text-yellow-500"
                : "text-gray-300"
            }`}
            onClick={() => handleRating(starValue)} // Set or de-rate on click
            onMouseEnter={() => setHover(starValue)} // Highlight on hover
            onMouseLeave={() => setHover(0)} // Remove highlight on mouse leave
          />
        );
      })}
    </div>
  );
};

export default StarRating;
