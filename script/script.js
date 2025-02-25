import addToCartController from "./controller/addCartController.js";
import foodList from "./model/foodList.js";
import foodCard from "./view/foodCard.js";

const listFood = foodList();

listFood.addFood();
console.log(listFood.getListFood());

foodCard(listFood.getListFood());
// addToCartController();
