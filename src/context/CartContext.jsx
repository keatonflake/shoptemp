import { createContext, useContext } from "react";

const CartContext = createContext({
  total: 1000,
});

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={{ total: 0 }}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
