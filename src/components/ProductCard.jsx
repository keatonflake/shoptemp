import { useCart } from "../context/CartContext";

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { name, price, image } = product;

  function handleClick() {
    console.log("clicked");
    addToCart(product);
  }

  return (
    <div className="productCard max-w-80 rounded bg-slate-100">
      <img src={image} alt={name} className="rounded" />
      <p className="name">{name}</p>
      <div className="action flex">
        <p>${price}</p>
        <button
          onClick={handleClick}
          className="bg-blue-400 text-white rounded p-2 ml-44 hover:border-2 hover:border-blue-400 hover:bg-slate-100 hover:text-black"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
