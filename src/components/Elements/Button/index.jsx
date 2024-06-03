import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to }) => (
  <Link to={to}>
    <button className="w-full lg:w-56 sm:h-10 mt-2 relative inline-flex items-center justify-center px-3.5 py-2.5 overflow-hidden font-medium text-amber-600 transition duration-300 ease-out border-2 border-amber-600 rounded-lg shadow-md group">
      <span className="absolute inset-0 flex items-center justify-center h-full text-white duration-500 -translate-x-full bg-amber-600 group-hover:translate-x-0 ease">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="absolute flex items-center text-base font-semibold justify-center w-full h-full text-amber-600 transition-all duration-300 transform group-hover:translate-x-full ease">
        View Project
      </span>
      <span className="relative text-base font-semibold invisible">
        View Project
      </span>
    </button>
  </Link>
);

export default Button;
