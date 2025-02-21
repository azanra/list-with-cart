import { arrFood } from "./model/data.js";
import foodFactory from "./model/foodFactory.js";
import foodCard from "./view/foodCard.js";

let listFoodObj = arrFood.map((item) => {
  return foodFactory(
    item.id,
    item.image,
    item.name,
    item.category,
    item.price,
    item.amount
  );
});

console.log(arrFood);
console.log(listFoodObj);

foodCard(listFoodObj);
