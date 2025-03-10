import { foodController } from "./addCartController.js";
import { confirmBtnController } from "./confirmBtnController.js";

export default function controller(listFood) {
  foodController.addCartController();
  foodController.actionController(listFood);
  confirmBtnController.confirmListener(listFood);
}
