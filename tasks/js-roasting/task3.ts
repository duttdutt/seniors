/* --- Мастер сортировок --- */
// Нужно отсортировать значения по возрастанию, с учетом как букв, так и цифр.
function sortArray(inputArray: string[]): string[] {
  return inputArray.sort((a, b) => a.localeCompare(b, undefined, {numeric: true}))
}

console.log(sortArray(['A100', 'A3', 'Z100', 'Z2'])); // ['A3', 'A100', 'Z2', 'Z100']


// Другое
const sortASC = (inputArray) => {
  const objectArr = inputArray.map(item => ({
    word: item[0], // "A100" || "A3" || "Z100" || "Z2"
    number: Number(item[0].slice(1)) // 100 || 3 || 100 || 2
  }));

  objectArr.sort(function(a: any, b: any) {
    return (
      (a.word > b.word) - (a.word < b.word)
    ) || (
      (a.number > b.number) - (a.number < b.number)
    );
  })

  return objectArr.map((item) => `${item.word}${item.number}`)
}
console.log(sortASC(['A100', 'A3', 'Z100', 'Z2']));

