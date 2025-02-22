import createElement from "./createElement.js";

export default function foodImage(element) {
  createElement(`#container-${element.id}`, "img", {
    src: element.image.desktop,
    alt: element.name,
    class: `foodImage`,
  });
}
