export const util = {
  setMultipleAttribute: (element, elementAttribute) => {
    for (let attribute in elementAttribute) {
      element.setAttribute(attribute, elementAttribute[attribute]);
    }
  },
  deleteElement: (element) => {
    const referenceElement = document.querySelector(element);
    if (referenceElement !== null) {
      referenceElement.remove();
    }
  },
  getParentId: (currentElement) => {
    let parentElementId = currentElement.parentNode.id;
    let splitParentId = parentElementId.split("-");
    return splitParentId[1];
  },
  setOpacity: (element, opacity) => {
    document.querySelector(element).style.opacity = opacity;
  },
  setElementActivity: (element, boolean) => {
    document.querySelector(element).disabled = boolean;
  },
  setTextContent: (element, textContent) => {
    document.querySelector(element).textContent = textContent;
  },
};
