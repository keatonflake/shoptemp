import { useCart } from "../context/CartContext";

export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();
  const { name, price, image } = product;

  return (
    <div className="CartCard bg-slate-100 m-2 rounded-2xl flex flex-col md:flex-row items-center md:items-start p-4 relative">
      <img
        src={image}
        alt="product image"
        className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg mb-2 md:mb-0 md:mr-4"
      />
      <div className="flex-grow">
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-gray-600">${price}</p>
      </div>
      <button
        onClick={() => removeFromCart(product)}
        className="text-white bg-red-600 p-2 rounded absolute top-2 right-2 md:static hover:border-2 hover:border-red-600 hover:bg-slate-100 hover:text-black"
      >
        Remove
      </button>
    </div>
  );
};
