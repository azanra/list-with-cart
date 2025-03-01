export default function foodFactory(id, image, name, category, price) {
  let amount = 0;
  const countTotalPrice = function () {
    return this.price * this.amount;
  };
  const incrementAmount = function () {
    amount++;
  };
  const decrementAmount = function () {
    amount--;
  };
  const resetAmount = function () {
    amount = 0;
  };
  const getAmount = function () {
    return amount;
  };
  return {
    id,
    image,
    name,
    category,
    price,
    countTotalPrice,
    incrementAmount,
    decrementAmount,
    resetAmount,
    getAmount,
  };
}
