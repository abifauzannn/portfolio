import React from "react";

const ButtonLanguage = ({ text }) => {
  return (
    <div className="flex flex-row gap-3 mt-2 flex-wrap">
      {text.map((language, index) => (
        <button
          key={index}
          className="w-24 py-2 text-sm rounded-md bg-amber-600 text-white font-bold shadow-xs cursor-default shadow-lg shadow-amber-200"
        >
          {language}
        </button>
      ))}
    </div>
  );
};

export default ButtonLanguage;
