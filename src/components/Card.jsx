import { useState } from "react";
import { Button } from "../components";

export const Card = ({ product }) => {
  const { name, price, image } = product;

  return (
    <div className="productCard max-w-80 rounded bg-slate-100">
      <img src={image} alt={name} className="rounded" />
      <p className="name">{name}</p>
      <div className="action flex">
        <p>${price}</p>
        <button className="bg-blue-500 text-white rounded p-2 ml-44">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
