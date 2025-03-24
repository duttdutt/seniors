// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(string) {
  const result = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') continue;

    const firstPart = string.slice(0, i) + string[i].toUpperCase();
    const secondPart = string.slice(i + 1, string.length)

    result.push(firstPart + secondPart)
  }

  return result;
}
