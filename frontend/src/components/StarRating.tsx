import React, { useState, useEffect } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");
interface childProps {
  farmerId: number;
  ratingAv: number;
}

const StarRating: React.FC<childProps> = ({ farmerId, ratingAv }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  useEffect(() => {
    setAverageRating(ratingAv);
  }, []);
  useEffect(() => {
    socket.on("rating", (data) => {
      if (data.farmerId === farmerId) {
        setAverageRating(data.ratingAverage);
      }
    });

    return () => {
      socket.off("rating");
    };
  }, [farmerId]);

  const handleRating = (value: number) => {
    const newRating = value === rating ? 0 : value;
    setRating(newRating);

    socket.emit("rate", { rate: newRating, farmerId });
  };

  return (
    <div className="space-y-2">
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
              onClick={() => handleRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
            />
          );
        })}
      </div>
      <p className="text-[12px] text-white">
        Average Rating:{" "}
        {averageRating ? averageRating.toFixed(2) : "Not rated yet"}%
      </p>
    </div>
  );
};

export default StarRating;
