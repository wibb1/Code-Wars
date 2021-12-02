// function likes(names) {
//   if (names.length > 1) {
//     returnString = " and " + names.pop() + " like this";
//     while (names.length > 1) {
//       returnString = names.pop() + ', ' + returnString;
//     }

//     return returnString;
//   } else if (names.length===0) {
//     return "no one likes this";
//   } else {
//     return names.pop() + " likes this";
//   }
// }

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  }
  if (names.length === 1) {
    return names[0] + " likes this";
  }
  names.reverse();
  const usedNames = [];
  while (names.length > 1 && usedNames.length < 2) {
    usedNames.push(names.pop());
  }

  return `${usedNames.join(", ")} and ${
    names.length > 1 ? names.length + " others" : names[0]
  } like this`;
}

console.log(
  "no one likes this",
  "=",
  likes([]),
  "\n",
  "Peter likes this",
  "=",
  likes(["Peter"]),
  "\n",
  "Jacob and Alex like this",
  "=",
  likes(["Jacob", "Alex"]),
  "\n",
  "Max, John and Mark like this",
  "=",
  likes(["Max", "John", "Mark"]),
  "\n",
  "Alex, Jacob and 2 others like this",
  "=",
  likes(["Alex", "Jacob", "Mark", "Max"])
);
