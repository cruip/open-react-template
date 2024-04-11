import React from "react";

interface ReviewProps {
  quote: string;
}

const ReviewComponent = ({quote}: ReviewProps) => {
  return (
    <div className="flex flex-col items-center p-4 space-y-4 max-w-md mx-auto">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="none"
          >
            <path d="M12 .587l3.668 7.425 8.332 1.212-6.001 5.851 1.416 8.253L12 18.896l-7.415 3.932 1.416-8.253-6.001-5.851 8.332-1.212L12 .587z" />
          </svg>
        ))}
      </div>
      <blockquote className=" text-center text-white font-semibold ">&quot;{quote}&quot;</blockquote>
    </div>
  );
};

export default ReviewComponent;
