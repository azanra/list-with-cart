import { util } from "../util/util.js";
import foodCard from "../view/foodCard.js";
import { foodController } from "./addCartController.js";

export const orderController = (function () {
  const startOrder = document.querySelector("#start-order");
  const modalOrder = document.querySelector(".modal-order-container");
  const orderListener = (listFood) => {
    startOrder.addEventListener("click", () => {
      modalOrder.close();
      listFood.resetAllAmount();
      resetView();
      foodCard(listFood.getListFood());
      foodController.addCartController();
      foodController.actionController(listFood);
    });
  };
  const resetView = () => {
    util.deleteElement("#contentContainer");
    util.deleteElement(".sidebarOrder");
    util.setTextContent(".order-amount", "");
    util.deleteElement(".cartModalContainer");
  };
  return { orderListener };
})();
