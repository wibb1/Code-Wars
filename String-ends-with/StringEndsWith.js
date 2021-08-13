// solution with endsWith https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function solution1(str, ending){
  return str.endsWith(ending);
}

//solution without endsWith
function solution2(str, ending){
  let output = true
  let strReversed = str.split("").reverse()
  let endingReversed = ending.split("").reverse()
  for (let i = 0; i<endingReversed.length;i++){
      if (strReversed[i] != endingReversed[i]){
        output = false
      }
  }
  return output
}

console.log(solution1('automatic', 'matic'))
console.log(solution2('automatic', 'matic'))