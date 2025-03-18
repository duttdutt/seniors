// https://www.codewars.com/kata/5264d2b162488dc400000001
function spinWords(string) {
  return string
    .split(" ")
    .map((word) => {
      if (word.length > 4) {
        return word.split("").reverse().join("");
      }

      return word;
    })
    .join(" ");
}
