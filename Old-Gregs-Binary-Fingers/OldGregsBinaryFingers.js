/*
Using Strings and push
*/
function binaryFingers(binString) {
  if (binString.length > 5) return new Error("Too Many Numbers!");

  const lengthCorrector = 5 - binString.length;
  const fingerArray = ["Pinkie", "Ring", "Middle", "Index", "Thumb"];
  let responseArray = [];

  for (let i = 0; i < binString.length; i++) {
    if (binString[i] > 0) responseArray.push(fingerArray[i + lengthCorrector]);
  }
  return responseArray;
}

console.log(
  binaryFingers("101"),
  binaryFingers("11111"),
  binaryFingers("1001")
);


/* Using numbers only */ 
function binaryFingers2(binString) {
  const fingerArray = ["Pinkie", "Ring", "Middle", "Index", "Thumb"];
  const value = parseInt(binString);
  let answer = [];
  let counter = 4;
  for (let i = 1; i < value; i *= 10) {
    if (Math.floor((value / i) % 10) >= 1) {
      answer.push(fingerArray[counter])
    }
    counter--
  }
  return answer.reverse()
}
console.log(
  binaryFingers2("101"),
  binaryFingers2("11111"),
  binaryFingers2("1001")
);

/* using filter and bitwise operators */
function binaryFingers3(binString){
  const fingerArray = ["Thumb", "Index", "Middle", "Ring", "Pinkie"];
  return fingerArray.filter((_,i) => parseInt(binString, 2) >> i & 1).reverse()
}

console.log(
  binaryFingers3("101"),
  binaryFingers3("11111"),
  binaryFingers3("1001")
);