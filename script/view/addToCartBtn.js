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
  createElement(`#btn-${element}`, "span", {
    id: `action-${element}`,
  });
  createElement(
    `#action-${element}`,
    "button",
    {
      type: "button",
      id: `incre-${element}`,
      class: "incre-btn",
    },
    "+"
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
      id: `decre-${element}`,
      class: "decre-btn",
    },
    "-"
  );
}

export default function addToCartBtn(element) {
  createElement(`#container-${element.id}`, "button", {
    type: "button",
    class: "toCartBtn",
    id: `btn-${element.id}`,
  });
  buttonAddToCart(element);
}
