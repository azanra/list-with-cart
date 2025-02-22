import createElement from "./createElement.js";

export default function foodCategory(element) {
  createElement(
    `#container-${element.id}`,
    "span",
    {
      class: "food-category",
    },
    element.category
  );
}
