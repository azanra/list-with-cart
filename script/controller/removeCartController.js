import { util } from "../util/util.js";
import { foodController } from "./addCartController.js";

export const removeCartController = (function () {
  const putListener = (listFood) => {
    const removeBtn = document.querySelectorAll(".removeBtn");
    removeBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        btnEvent(btn, listFood);
      });
    });
  };
  const btnEvent = (element, listFood) => {
    const foodId = util.getParentId(element);
    listFood.resetFoodAmount(foodId);
    util.setTextContent(`#amount-${foodId}`, listFood.getFoodAmount(foodId));
    util.deleteElement(`#sidebarSection-${foodId}`);
    foodController.updateTotalPrice(listFood);
    util.setTextContent(".cart-amount", listFood.getTotalAmount());
  };
  return { putListener };
})();
