import createElement from "./createElement.js";

function buttonAddToCart(element) {
  createElement(`#btn-${element.id}`, "span", {
    class: `btn-container-${element.id} btn-cart-logo`,
  });
  createElement(`.btn-container-${element.id}`, "img", {
    src: "../assets/images/icon-add-to-cart.svg",
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
  document.querySelector(`#decre-${element}`).style.opacity = 0;
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
  document.querySelector(`#incre-${element}`).style.opacity = 0;
}

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
