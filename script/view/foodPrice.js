import createElement from "./createElement.js";

export default function foodPrice(element) {
  createElement(
    `#container-${element.id}`,
    "p",
    {
      class: "food-price",
    },
    `$${element.price}`
  );
}
