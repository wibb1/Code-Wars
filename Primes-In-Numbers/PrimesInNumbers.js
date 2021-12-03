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

function primeFactors(n) {
  let answer = "";
  const obj = getFactors(n);
  for (const key in obj) {
    answer += obj[key] < 2 ? `(${key})` : `(${key}**${obj[key]})`;
  }
  return answer;
}

const randomNumber = Math.floor(Math.random() * 10000);
console.log(randomNumber, "=>", primeFactors(randomNumber));
