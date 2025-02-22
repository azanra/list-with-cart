import createElement from "./createElement.js";

export default function foodName(element) {
  createElement(
    `#container-${element.id}`,
    "p",
    {
      class: "food-name",
    },
    element.name
  );
}
