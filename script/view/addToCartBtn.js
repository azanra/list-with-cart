import createElement from "./createElement.js";
import { util } from "../util/util.js";

function buttonAddToCart(element) {
  createElement(`#btn-${element.id}`, "span", {
    class: `btn-container-${element.id} btn-cart-logo`,
  });
  createElement(`.btn-container-${element.id}`, "img", {
    src: "./assets/images/icon-add-to-cart.svg",
    class: "btnImage",
  });
  createElement(
    `.btn-container-${element.id}`,
    "span",
    { class: "btnText" },
    "Add to Cart"
  );
}

export function buttonActionCart(element) {
  createElement(
    `#action-${element}`,
    "button",
    {
      type: "button",
      id: `decre-${element}`,
      class: "decre-btn",
      disabled: "",
    },
    "-"
  );
  createElement(`#action-${element}`, "span", {
    id: `amount-${element}`,
    class: "amount-text",
  });
  createElement(
    `#action-${element}`,
    "button",
    {
      type: "button",
      id: `incre-${element}`,
      class: "incre-btn",
      disabled: "",
    },
    "+"
  );
  hideAction(element);
}

const hideAction = (element) => {
  util.setOpacity(`#decre-${element}`, 0);
  util.setOpacity(`#amount-${element}`, 0);
  util.setOpacity(`#incre-${element}`, 0);
};

export const unhideAction = (element) => {
  util.setOpacity(`#decre-${element}`, 1);
  util.setOpacity(`#amount-${element}`, 1);
  util.setOpacity(`#incre-${element}`, 1);
};

export const enableAction = (element) => {
  util.setElementActivity(`#decre-${element}`, false);
  util.setElementActivity(`#amount-${element}`, false);
  util.setElementActivity(`#incre-${element}`, false);
};

export default function addToCartBtn(element) {
  createElement(`#container-${element.id}`, "div", {
    id: `add-${element.id}`,
    class: "addContainer",
  });
  createElement(`#add-${element.id}`, "button", {
    type: "button",
    class: "toCartBtn",
    id: `btn-${element.id}`,
  });
  createElement(`#container-${element.id}`, "div", {
    id: `action-${element.id}`,
    class: "actionContainer",
  });
  buttonAddToCart(element);
  buttonActionCart(element.id);
}
