function isIsogram(str){
  let obj = {};
  str = str.toLowerCase()
  for(let chr of str){
    obj[chr] = (obj[chr]+1) || 1
    if(obj[chr] > 1) {
      return false;
    }
  }
  return true;
}