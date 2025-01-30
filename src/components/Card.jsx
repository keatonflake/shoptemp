import { useState } from "react";
import { Button } from "../components";

export const Card = ({ image, description, price, productName }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="md:max-w-80 p-4 rounded bg-slate-200 m-4">
      <img src={image} alt={productName} />
      <div>
        <p className="text-center">{description}</p>
      </div>
      <div className="flex flex-row justify-center space-x-32">
        <span className="text-xl p-2 bg-slate-100 rounded">${price}</span>
        <Button text="Add to Cart" onClick={addToCart} />
      </div>
      {/* <p>Cart: {cartCount}</p> */}
    </div>
  );
};
