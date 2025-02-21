import { setMultipleAttribute } from "../util/util.js";

export default function createElement(
  parent,
  element,
  elementAttr,
  elementText
) {
  let parentElement = document.querySelector(parent);
  let newElement = document.createElement(element);
  setMultipleAttribute(newElement, elementAttr);
  newElement.textContent = elementText;
  parentElement.append(newElement);
}
