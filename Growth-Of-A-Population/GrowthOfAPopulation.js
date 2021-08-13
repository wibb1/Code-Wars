function nbYear(p0, percent, aug, p) {
  let population = p0;
  let year = 0;
  while (population < p) {
    year++;
    population += (population * percent) / 100 + aug;
  }
  return year;
}

console.log(`15 = ${nbYear(1500, 5, 100, 5000)}`);
console.log(`10 = ${nbYear(1500000, 2.5, 10000, 2000000)}`);
console.log(`94 = ${nbYear(1500000, 0.25, 1000, 2000000)}`);
