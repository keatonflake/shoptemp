import { createContext, useContext } from "react";

const initailState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(initailState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initailState);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const value = {
    total: state.total,
    cartList: state.cartList,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
