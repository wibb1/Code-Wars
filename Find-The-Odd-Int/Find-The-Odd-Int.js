function findOdd(A) {
  let object = {};
  for (let item of A) {
    object[item] = (object[item] || 0) + 1;
  }
  return Object.keys(object).find((key) => object[key] % 2 != 0);
}
console.log(findOdd([-2, -2, 3, 4, 2, 3, 4, 5, 5]));
