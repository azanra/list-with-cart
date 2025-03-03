import { controller } from "./controller/addCartController.js";
import foodList from "./model/foodList.js";
import foodCard from "./view/foodCard.js";

const listFood = foodList();

listFood.addFood();
console.log(listFood.getListFood());

foodCard(listFood.getListFood());
controller.addCartController(listFood);
controller.incrementController(listFood);
