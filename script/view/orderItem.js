import { util } from "../util/util.js";
import { cartItem } from "./cartItem.js";

export const orderItem = (function () {
  const extendCartItem = (listFood) => {
    cartItem.createItem(listFood, ".modal-cart", "modalSection");
    util.setTextContent(".modal-amount", listFood.getTotalPrice());
  };
  return { extendCartItem };
})();
