export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((c) => c.id !== payload.id) };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === payload.id ? (c.qty = payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};
