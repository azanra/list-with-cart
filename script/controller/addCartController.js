import { util } from "../util/util.js";
import { buttonActionCart } from "../view/addToCartBtn.js";

export const controller = {
  putListener: function (element, event, listFood) {
    const nodeElement = document.querySelectorAll(element);
    nodeElement.forEach((item) => {
      item.addEventListener("click", () => {
        event(item, listFood);
      });
    });
  },
  addToCartEvent: function (element, listFood) {
    let foodId = util.getParentId(element);
    listFood.findFoodToEdit(foodId);

    util.deleteElement(`.btn-container-${foodId}`);
    util.deleteElement(`#btn-${foodId}`);
    buttonActionCart(foodId);
  },
  addCartController: function (listFood) {
    this.putListener(".toCartBtn", this.addToCartEvent.bind(this), listFood);
  },
  incrementEvent: function (listFood) {
    const increBtn = document.querySelectorAll(
      `incre-${listFood.findEdittedFood()}`
    );
    if (increBtn !== null || increBtn !== undefined) {
      increBtn.forEach((btn) => {
        let foodId = util.getParentId(increBtn);
        btn.addEventListener("click", () => {
          listFood.incrementFoodAmount(foodId);
        });
      });
    }
  },
};
