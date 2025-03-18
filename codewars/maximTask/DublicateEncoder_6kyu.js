// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
// First solution:
function duplicateEncode(words) {
  const chars = words.toLowerCase().split("");
  const countMap = new Map();
  let result = "";

  for (const char of chars) {
    if (countMap.has(char)) {
      countMap.set(char, countMap.get(char) + 1);
    } else {
      countMap.set(char, 0);
    }
  }

  for (const char of chars) {
    if (countMap.get(char) < 1) {
      result += "(";
    } else {
      result += ")";
    }
  }

  return result;
}
// Second solution:
function duplicateEncode(words) {
  return words
    .toLowerCase()
    .split("")
    .map((word, _, array) =>
      array.indexOf(word) === array.lastIndexOf(word) ? "(" : ")"
    )
    .join("");
}
