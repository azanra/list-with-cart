import { util } from "../util/util.js";
import { controller } from "./addCartController.js";

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
    util.deleteElement(`#cartContainer-${foodId}`);
    controller.updateTotalPrice(listFood);
  };
  return { putListener };
})();
