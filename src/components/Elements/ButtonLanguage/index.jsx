import React from "react";

const ButtonLanguage = ({ text }) => {
  return (
    <button
      type="button"
      className="w-24 py-2 text-sm  rounded-md bg-amber-600 text-white font-bold shadow-xs cursor-default shadow-lg shadow-amber-200"
    >
      {text}
    </button>
  );
};

export default ButtonLanguage;
