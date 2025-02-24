export function setMultipleAttribute(element, objAttr) {
  for (let key in objAttr) {
    element.setAttribute(key, objAttr[key]);
  }
}

export function deleteElement(element) {
  const refElement = document.querySelector(element);
  if (refElement !== null) {
    refElement.remove();
  }
}

export function getTheId(parentElement, index) {
  let splitParentId = parentElement.split("-");
  return splitParentId[index];
}
