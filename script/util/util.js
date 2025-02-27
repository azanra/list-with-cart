export const util = {
  setMultipleAttribute: function (element, elementAttribute) {
    for (let attribute in elementAttribute) {
      element.setAttribute(attribute, elementAttribute[attribute]);
    }
  },
  deleteElement: function (element) {
    const referenceElement = document.querySelector(element);
    if (referenceElement !== null) {
      referenceElement.remove();
    }
  },
  getParentId: function (currentElement) {
    let parentElementId = currentElement.parentNode.id;
    let splitParentId = parentElementId.split("-");
    return splitParentId[1];
  },
};
