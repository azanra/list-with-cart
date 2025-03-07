import { controller } from "./controller/addCartController.js";
import { confirmBtnController } from "./controller/confirmBtnController.js";
import foodList from "./model/foodList.js";
import foodCard from "./view/foodCard.js";

const listFood = foodList();

listFood.addFood();
console.log(listFood.getListFood());

foodCard(listFood.getListFood());
controller.addCartController();
controller.actionController(listFood);
confirmBtnController.confirmListener(listFood);
