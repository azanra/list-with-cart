import { deleteElement, getTheId } from "../util/util.js";
import { buttonActionCart } from "../view/addToCartBtn.js";

export default function addToCartController() {
  const toCartBtn = document.querySelectorAll(".toCartBtn");
  toCartBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      let parentId = btn.parentNode.id;
      let onlyId = getTheId(parentId, 1);
      deleteElement(`.btn-container-${onlyId}`);
      buttonActionCart(onlyId);
    });
  });
}
