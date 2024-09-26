import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Card = ({ name, link }) => {
  return (
    <div className="flex justify-center mt-5">
      <Link
        to={link}
        className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md shadow-md transition-transform duration-300 hover:scale-105 font-medium flex items-center justify-center gap-2"
      >
        <span className="task-name">{name}</span>
        <span className="ml-2">→</span>
      </Link>
    </div>
  );
};

export default Card;
