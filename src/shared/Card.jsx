import React from "react";

function Card({ children }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition duration-300 mb-4" >
      {children}
    </div>
  );
}

export default Card;