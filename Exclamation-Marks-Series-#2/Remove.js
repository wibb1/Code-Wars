function remove(s) {
  let removed = false;
  while (!removed) {
    removed = true;
    if (s[s.length - 1] === "!") {
      let arr = s.split("");
      arr.pop();
      s = arr.join("");
      removed = false;
    }
  }
  return s;
}