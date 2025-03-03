import { util } from "../util/util.js";
import {
  buttonActionCart,
  enableAction,
  unhideAction,
} from "../view/addToCartBtn.js";

export const controller = {
  putListener: function (element, event, listFood) {
    const nodeElement = document.querySelectorAll(element);
    nodeElement.forEach((item) => {
      item.addEventListener("click", () => {
        event(item, listFood);
      });
    });
  },
  addToCartEvent: function (element) {
    let foodId = util.getParentId(element);
    util.deleteElement(`#add-${foodId}`);
    unhideAction(foodId);
    enableAction(foodId);
  },
  addCartController: function () {
    this.putListener(".toCartBtn", this.addToCartEvent.bind(this));
  },
  incrementEvent: function (element, listFood) {
    let foodId = util.getParentId(element);
    listFood.incrementFoodAmount(foodId);
  },
  incrementController: function (listFood) {
    this.putListener(".incre-btn", this.incrementEvent.bind(this), listFood);
  },
};
