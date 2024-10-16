//www.codewars.com/kata/523f5d21c841566fde000009/
function arrayDiff(a, b) {
  const set = new Set(b);
  return a.filter((item) => !set.has(item));
}

class User {
  constructor() {}
}
