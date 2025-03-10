import { util } from "../util/util.js";

export const orderController = (function () {
  const startOrder = document.querySelector("#start-order");
  const modalOrder = document.querySelector(".modal-order-container");
  const orderListener = (listFood) => {
    startOrder.addEventListener("click", () => {
      modalOrder.close();
      listFood.resetAllAmount();
    });
  };
  return { orderListener };
})();
