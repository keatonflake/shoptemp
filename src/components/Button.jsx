import React from "react";

export const Button = ({ text, onClick }) => {
  return (
    <button className="bg-blue-500 text-white p-2 rounded" onClick={onClick}>
      {text}
    </button>
  );
};
