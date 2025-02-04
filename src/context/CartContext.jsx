import { createContext, useContext } from "react";

const initailState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(initailState);

export const CartProvider = ({ children }) => {
  const value = {
    total: 1000,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
