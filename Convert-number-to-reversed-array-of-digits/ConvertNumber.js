function digitize(n) {
  arrayOfStrings = n.toString().split("").reverse()
  return arrayOfStrings.map(Number)
}