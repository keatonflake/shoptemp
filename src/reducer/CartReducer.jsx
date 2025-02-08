export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartList: payload.products,
        total: payload.products.reduce((sum, item) => sum + item.price, 0),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartList: payload.products,
        total: payload.products.reduce((sum, item) => sum + item.price, 0),
      };

    default:
      throw new Error("No Case Found In cartReducer");
  }
};
