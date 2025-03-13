import foodList from "../model/foodList.js";
import { util } from "../util/util.js";
import createElement from "./createElement.js";

export const cartItem = (function () {
  const removeDuplicate = () => {
    util.deleteElement(".sidebarOrder");
    createElement(".sidebar-order", "div", {
      class: "sidebarOrder",
    });
  };
  const createItem = (foodList, parentElement, containerElement) => {
    const listFood = foodList.getListFood();
    listFood.forEach((item) => {
      let currentAmount = item.getAmount();
      if (currentAmount > 0) {
        //to help reuse this method, each will have different parent and container
        createElement(parentElement, "div", {
          id: `${containerElement}-${item.id}`,
        });

        if (containerElement === "modalSection") {
          createImage(containerElement, item.id, item);
        }

        createElement(`#${containerElement}-${item.id}`, "div", {
          class: `${containerElement}-${item.id}`,
        });

        createElement(
          `.${containerElement}-${item.id}`,
          "p",
          {
            class: `cartText`,
          },
          item.name
        );

        createElement(
          `.${containerElement}-${item.id}`,
          "span",
          {
            class: `cartAmount`,
          },
          `${currentAmount}x`
        );

        createElement(
          `.${containerElement}-${item.id}`,
          "span",
          {
            class: `cartPrice`,
          },
          `@ $${item.price}`
        );

        createElement(
          `.${containerElement}-${item.id}`,
          "span",
          {
            class: `cartTotalPrice`,
          },
          `$${item.countTotalPrice()}`
        );

        if (containerElement === "sidebarSection") {
          createRemoveBtn(containerElement, item.id);
        }
      }
    });
  };

  const createRemoveBtn = (containerElement, item) => {
    createElement(
      `#${containerElement}-${item}`,
      "button",
      {
        class: `removeBtn`,
        id: `remove-${item}`,
      },
      "X"
    );
  };

  const createImage = (containerElement, item, food) => {
    createElement(`#${containerElement}-${item}`, "img", {
      class: "ModalImage",
      src: food.image.thumbnail,
    });
  };

  return { createItem, removeDuplicate };
})();
