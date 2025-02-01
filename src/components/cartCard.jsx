import React from "react";

export const CartCard = ({ product }) => {
  const { name, price, image } = product;
  return (
    <div className="CartCard bg-slate-200 m-2 rounded-2xl">
      <img src={image} alt="product image" className="w-30" />
      <p>{name}</p>
      <p>${price}</p>
      <button className="text-white bg-red-600 p-2 rounded right-0 top-0">
        Remove
      </button>
    </div>
  );
};
