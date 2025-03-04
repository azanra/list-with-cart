import { util } from "../util/util.js";
import createElement from "./createElement.js";

export const cartItem = (foodList) => {
  const listFood = foodList.getListFood();
  util.deleteElement(".sidebarOrder");
  createElement(".sidebar-order", "div", {
    class: "sidebarOrder",
  });
  listFood.forEach((item) => {
    let currentAmount = item.getAmount();
    if (currentAmount > 0) {
      createElement(".sidebarOrder", "div", {
        id: `cartContainer-${item.id}`,
      });
      createElement(`#cartContainer-${item.id}`, "div", {
        class: `cartTextContainer-${item.id}`,
      });
      createElement(
        `.cartTextContainer-${item.id}`,
        "p",
        {
          class: `cartText`,
        },
        item.name
      );
      createElement(
        `.cartTextContainer-${item.id}`,
        "span",
        {
          class: `cartAmount`,
        },
        currentAmount
      );
      createElement(
        `.cartTextContainer-${item.id}`,
        "span",
        {
          class: `cartPrice`,
        },
        item.price
      );
      createElement(
        `.cartTextContainer-${item.id}`,
        "span",
        {
          class: `cartTotalPrice`,
        },
        item.countTotalPrice()
      );
      createElement(
        `#cartContainer-${item.id}`,
        "button",
        {
          class: `removeBtn`,
          id: `remove-${item.id}`,
        },
        "X"
      );
    }
  });
};
