function pages(n, m) {
  return n < 0 || m < 0 ? 0 : m * n;
}

console.log(pages(15, 2));
