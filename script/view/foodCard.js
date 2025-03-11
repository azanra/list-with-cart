import createElement from "./createElement.js";
import addToCartBtn from "./addToCartBtn.js";
import foodCategory from "./foodCategory.js";
import foodName from "./foodName.js";
import foodPrice from "./foodPrice.js";
import foodImage from "./foodImage.js";

export default function foodCard(foodArray) {
  createElement(".content", "div", {
    id: "contentContainer",
  });
  foodArray.forEach((element) => {
    createElement("#contentContainer", "div", {
      id: `container-${element.id}`,
    });
    foodImage(element);
    addToCartBtn(element);
    foodCategory(element);
    foodName(element);
    foodPrice(element);
  });
}
