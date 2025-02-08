import { useCart } from "../context/CartContext";
import { CartCard } from "../components";

export const Cart = () => {
  const { cartList: products, total } = useCart();

  return (
    <main>
      <section className="cart">
        <div className="flex justify-center text-white text-2xl py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500">
          Cart Items: {products.length} | ${total}
        </div>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
