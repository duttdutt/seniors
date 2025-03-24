// https://www.codewars.com/kata/52b757663a95b11b3d00062d
function toWeirdCase(string) {
  const result = string
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word
        .split('')
        .map((char, i) => {
          if (i % 2 === 0) {
            return char.toUpperCase();
          }
          return char;
        })
        .join('')
    })
    .join(' ')

  return result;
}
