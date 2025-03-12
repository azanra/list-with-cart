import { orderItem } from "../view/orderItem.js";
import { orderController } from "./orderController.js";

export const confirmBtnController = (function () {
  const confirmBtn = document.querySelector("#confirm-order");
  const modalOrder = document.querySelector(".modal-order-container");
  const confirmListener = (listFood) => {
    confirmBtn.addEventListener("click", () => {
      modalOrder.showModal();
      listFood.display();
      orderItem.extendCartItem(listFood);
    });
  };

  return { confirmListener };
})();
