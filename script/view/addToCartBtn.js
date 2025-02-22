import createElement from "./createElement.js";

function buttonAddToCart(element) {
  createElement(`#btn-${element.id}`, "span", {
    class: `btn-container-${element.id}`,
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

function buttonActionCart(element) {
  createElement(`#btn-${element.id}`, "span", {
    id: `action-${element.id}`,
  });
  createElement(
    `#action-${element.id}`,
    "button",
    {
      type: "button",
      id: `incre-${element.id}`,
      class: "incre-btn",
    },
    "+"
  );
  createElement(`#action-${element.id}`, "span", {
    id: `amount-${element.id}`,
    class: "amount-text",
  });
  createElement(
    `#action-${element.id}`,
    "button",
    {
      type: "button",
      id: `decre-${element.id}`,
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
  buttonActionCart(element);
}
