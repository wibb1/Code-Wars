function findOdd(A) {
  let object = {};
  for (let item of A) {
    object[item] = (object[item] || 0) + 1;
  }
  return parseInt(Object.keys(object).find((key) => object[key] % 2 != 0));
}