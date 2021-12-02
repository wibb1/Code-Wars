function nbYear(p0, percent, aug, p) {
  let population = p0;
  let year = 0;
  while (population < p) {
    year++;
    population += (population * percent) / 100 + aug;
  }
  return year;
}