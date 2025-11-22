import React from "react";

const Button = ({ genRandomId }) => {
  return (
    <div className="mt-5 p-3 text-center font-mono font-bold">
      <button
        type="button"
        onClick={genRandomId}
        className="p-2 ml-1 text-xl text-black shadow-lg shadow-black rounded bg-lime-600 hover:bg-lime-700 cursor-pointer transition-all outline-0"
      >
        Get Pokemon info.
      </button>
    </div>
  );
};

export default Button;
