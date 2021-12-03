function getFactors(n) {
  const factors = {};
  let divisor = 2;
  while (n >= 2) {
    if (n % divisor === 0) {
      factors[divisor] = ++factors[divisor] || 1;
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

function f(num) {
  var geomDeriv = 1;
  const factors = getFactors(num);
  for (let key in factors) {
    geomDeriv *= Math.pow(parseInt(key), factors[key] - 1) * factors[key];
  }
  return geomDeriv;
}

console.log(f(24500))