import { util } from "../util/util.js";
import { enableAction, unhideAction } from "../view/addToCartBtn.js";
import { cartItem } from "../view/cartItem.js";
import { removeCartController } from "./removeCartController.js";

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
  incrementEvent: function (element, listFood) {
    let foodId = util.getParentId(element);
    listFood.incrementFoodAmount(foodId);
    this.updateFoodAmount(foodId, listFood);
    cartItem(listFood);
    this.updateTotalPrice(listFood);
    removeCartController.putListener(listFood);
  },
  decrementEvent: function (element, listFood) {
    let foodId = util.getParentId(element);
    listFood.decrementFoodAmount(foodId);
    this.updateFoodAmount(foodId, listFood);
    cartItem(listFood);
    this.updateTotalPrice(listFood);
  },
  actionController: function (listFood) {
    this.putListener(".incre-btn", this.incrementEvent.bind(this), listFood);
    this.putListener(".decre-btn", this.decrementEvent.bind(this), listFood);
  },
  updateFoodAmount: (foodId, listFood) => {
    let foodAmount = listFood.getFoodAmount(foodId);
    util.setTextContent(`#amount-${foodId}`, foodAmount);
  },
  updateTotalPrice: (listFood) => {
    let totalPrice = listFood.getTotalPrice();
    util.setTextContent(".order-amount", totalPrice);
  },
};
