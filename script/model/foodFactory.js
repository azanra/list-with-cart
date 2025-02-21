export default function foodFactory(id, image, name, category, price, amount) {
  const countTotalPrice = function () {
    return this.price * this.amount;
  };
  return { id, image, name, category, price, amount, countTotalPrice };
}
