function remove(s) {
  let removed = false;
  while (!removed) {
    removed = true;
    if (s[s.length - 1] === "!") {
      s = s.slice(0, -1);
      removed = false;
    }
  }
  return s;
}

console.log(remove("hi!"));
