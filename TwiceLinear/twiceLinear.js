function dblLinear(n) {
  // The number u(0) = 1 is the first one in u.
  // For each value in u, then y = 2 * u(x) + 1 and z = 3 * u(x) + 1 must be in u too.
  // There are no other numbers in u.
  // Example:
  // u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
  
  // 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

  let u = [1]
  let i = 0
  while (u.length<n){
    if (Math.max(...u))
    u.push(2*u[i]+1)
    u.push(3*u[i]+1)
    //u=u.sort((a,b) => a-b);
    u = [...new Set(u)]
    i++
  }
  return u
}

console.log(`22 = ${dblLinear(10)}`)
console.log(`57 = ${dblLinear(20)}`)
console.log(`91 = ${dblLinear(30)}`)
console.log(`175 = ${dblLinear(50)}`)
console.log(`447 = ${dblLinear(100)}`)