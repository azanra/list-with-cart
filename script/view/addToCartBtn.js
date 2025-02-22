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

export default function addToCartBtn(element) {
  createElement(`#container-${element.id}`, "button", {
    type: "button",
    class: "toCartBtn",
    id: `btn-${element.id}`,
  });
  buttonAddToCart(element);
}
