function reverseWords(str) {
  let array = str.split(" ")
  let answerArray = []
  for (let i = 0; i<array.length;i++){
    answerArray.push(array[i].split("").reverse().join(""))
  }
  return answerArray.join(" ")
}

console.log(reverseWords("This is and example!"))

console.log(reverseWords("double spaces"))
