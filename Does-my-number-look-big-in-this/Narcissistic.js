function narcissistic(value) {
  let array = value.toString().split("");
  const reducer = (sum, element) => {
    return sum + Math.pow(parseInt(element), array.length);
  };
  return value === array.reduce(reducer, 0);
}
console.log(narcissistic(153), narcissistic(1652), "\n\n");

function narcissistic2(value) {
  let sum = 0;
  const string = value.toString();
  for (let letter of string) {
    sum += Math.pow(parseInt(letter), string.length);
  }
  return sum === value;
}

console.log(narcissistic2(153), narcissistic2(1652));
