import { arrFood } from "./data.js";
import foodFactory from "./foodFactory.js";

export default function foodList() {
  let listFoodArr = [];
  const addFood = () => {
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
  const getListFood = () => {
    return listFoodArr;
  };
  const incrementFoodAmount = (foodId) => {
    listFoodArr.forEach((item) => {
      if (item.id === Number(foodId)) {
        item.incrementAmount();
        console.log(`item amount with id of ${item.id} is ${item.getAmount()}`);
      }
    });
  };
  const decrementFoodAmount = (foodId) => {
    listFoodArr.forEach((item) => {
      if (item.id === Number(foodId)) {
        item.decrementAmount();
        console.log(
          `current item amount with id of ${item.id} is ${item.getAmount()}`
        );
      }
    });
  };
  const getFoodAmount = (foodId) => {
    let foodAmount;
    listFoodArr.forEach((item) => {
      if (item.id === Number(foodId)) {
        foodAmount = item.getAmount();
      }
    });
    return foodAmount;
  };
  const getTotalPrice = () => {
    let totalPrice = listFoodArr.reduce((accumulator, item) => {
      return (accumulator += item.countTotalPrice());
    }, 0);
    return totalPrice;
  };
  return {
    addFood,
    getListFood,
    incrementFoodAmount,
    decrementFoodAmount,
    getFoodAmount,
    getTotalPrice,
  };
}
