import createElement from "./createElement.js";

export default function foodCard(foodArray) {
  foodArray.forEach((element) => {
    createElement(".content", "div", { id: `container-${element.id}` });
    createElement(`#container-${element.id}`, "img", {
      src: element.image.desktop,
      alt: element.name,
      class: `food-image`,
    });
  });
}
