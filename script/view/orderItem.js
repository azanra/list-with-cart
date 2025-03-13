import { util } from "../util/util.js";
import { cartItem } from "./cartItem.js";
import createElement from "./createElement.js";

export const orderItem = (function () {
  const extendCartItem = (listFood) => {
    createElement(".modal-cart", "div", {
      class: "cartModalContainer",
    });
    cartItem.createItem(listFood, ".cartModalContainer", "modalSection");
    util.setTextContent(".modal-amount", `$${listFood.getTotalPrice()}`);
  };
  return { extendCartItem };
})();
