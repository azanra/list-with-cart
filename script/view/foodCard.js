import createElement from "./createElement.js";
import addToCartBtn from "./addToCartBtn.js";
import foodCategory from "./foodCategory.js";
import foodName from "./foodName.js";
import foodPrice from "./foodPrice.js";
import foodImage from "./foodImage.js";

export default function foodCard(foodArray) {
  foodArray.forEach((element) => {
    createElement(".content", "div", { id: `container-${element.id}` });
    foodImage(element);
    addToCartBtn(element);
    foodCategory(element);
    foodName(element);
    foodPrice(element);
  });
}
