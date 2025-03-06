export const confirmBtnController = (function () {
  const confirmBtn = document.querySelector("#confirm-order");
  const modalOrder = document.querySelector(".modal-order-container");
  const confirmListener = () => {
    confirmBtn.addEventListener("click", () => {
      modalOrder.showModal();
    });
  };
  return { confirmListener };
})();
