import { arrFood } from "./data.js";
import foodFactory from "./foodFactory.js";

export default function foodList() {
  let listFoodArr = [];
  const addFood = function () {
    arrFood.forEach((item) => {
      let foodItem = foodFactory(
        item.id,
        item.image,
        item.name,
        item.category,
        item.price
      );
      listFoodArr.push(foodItem);
    });
  };
  const getListFood = function () {
    return listFoodArr;
  };
  const findFoodToEdit = function (foodId) {
    listFoodArr.forEach((item) => {
      if (item.id === foodId) {
        item.setEdit();
      }
    });
  };
  const findEdittedFood = function () {
    listFoodArr.forEach((item) => {
      if (item.edit === true) {
        return item.id;
      }
    });
  };
  return { addFood, getListFood, findFoodToEdit, findEdittedFood };
}
