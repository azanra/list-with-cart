function setMultipleAttribute(element, objAttr) {
  for (let key in objAttr) {
    element.setAttribute(key, objAttr[key]);
  }
}

export { setMultipleAttribute };
