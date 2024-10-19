/* --- Сжатие строки --- */
// Есть строка со множеством повторяющихся букв: 
// "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"
// Нужно ее сократить, чтобы получилось так:
// "A4B3C2XYZD4E3F3A6B28"
const reduceString = (str) => {
  const result = [];
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    const elementNow = str[i];
    const elementNext = str[i + 1];

    if (elementNow === elementNext) {
      count++;
      continue;
    }

    const countOrSkip = (count === 1) ? '' : count;

    result.push(`${elementNow}${countOrSkip}`);

    count = 1;
  }

  return result.join("");
};

console.log(reduceString('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')); // A4B3C2XYZD4E3F3A6B28
console.log(reduceString('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB') === 'A4B3C2XYZD4E3F3A6B28'); // true
