import { util } from "../util/util.js";
import {
  buttonActionCart,
  enableAction,
  unhideAction,
} from "../view/addToCartBtn.js";

export const controller = {
  putListener: (element, event, listFood) => {
    const nodeElement = document.querySelectorAll(element);
    nodeElement.forEach((item) => {
      item.addEventListener("click", () => {
        event(item, listFood);
      });
    });
  },
  addToCartEvent: (element) => {
    let foodId = util.getParentId(element);
    util.deleteElement(`#add-${foodId}`);
    unhideAction(foodId);
    enableAction(foodId);
  },
  addCartController: function () {
    this.putListener(".toCartBtn", this.addToCartEvent.bind(this));
  },
  incrementEvent: (element, listFood) => {
    let foodId = util.getParentId(element);
    listFood.incrementFoodAmount(foodId);
  },
  decrementEvent: (element, listFood) => {
    let foodId = util.getParentId(element);
    listFood.decrementFoodAmount(foodId);
  },
  actionController: function (listFood) {
    this.putListener(".incre-btn", this.incrementEvent.bind(this), listFood);
    this.putListener(".decre-btn", this.decrementEvent.bind(this), listFood);
  },
};
