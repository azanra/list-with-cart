import createElement from "./createElement.js";

export default function foodCard(foodArray) {
  foodArray.forEach((element) => {
    createElement(".content", "div", { id: `container-${element.id}` });
  });
}
