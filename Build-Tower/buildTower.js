
function towerBuilder(nFloors) {
  let stars = []
  let answer = []
  for (let i=0;i<nFloors*2-1;i++){
    stars.push("*")
  }
  answer.push(stars.join("")) 
  if (answer.length>1){
    for (let i=1;i<stars.length/2;i++){
      let first = stars.findIndex(element => element === "*")
      stars = stars.splice(first,1," ")
      stars = stars.splice(stars.length-i,1," ")
      answer.unshift(stars.join(""))
    }
  }
  return answer
}

console.log(`1 level = ${towerBuilder(1)}`)
console.log(`2 level = ${towerBuilder(2)}`)
console.log(`3 level = ${towerBuilder(3)}`)