import { cartItem } from "./cartItem.js";

export const orderItem = (function () {
  const extendCartItem = (listFood) => {
    cartItem.createItem(listFood, ".modal-cart", "modalSection");
  };
  return { extendCartItem };
})();
