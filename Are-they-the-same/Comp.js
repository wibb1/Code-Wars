function convertArrayToObject(array) {
  const obj = {};
  array.forEach((element) => {
    obj[element] = (obj[element] || 0) + 1;
  });
  return obj;
}

function compareObjects(obj1, obj2) {
  for (let key in obj1) {
    let otherKey = Math.pow(parseInt(key), 2).toString();
    if (obj2[otherKey] !== obj1[key]) return false;
  }
  return true;
}

function comp(array1, array2) {
  // remarks -> a or b might be nil or null or None or nothing (except in C++, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).  Also making sure the arrays are the same size.
  if (array1 === null || array2 === null || array1.length !== array2.length)
    return false;
  // remarks -> a or b might be [] or {} (all languages except R, Shell).  Assumes that if the input is an object that it does not have duplicate keys but has the key values as counts instead.
  const object1 = Array.isArray(array1) ? convertArrayToObject(array1) : array1;
  const object2 = Array.isArray(array2) ? convertArrayToObject(array2) : array2;
  return compareObjects(object1, object2)
    ? true
    : compareObjects(object2, object1);
}

console.log(
  comp(null, null),
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  ),
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [132, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
