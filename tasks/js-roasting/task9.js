/* --- Миксер --- */
// Дан массив целых чисел [1, 2, 3, 4, 5, 6, 7]
// Нужно перемешать его значения в случайном порядке. 
// Выглядеть может так [4, 7, 1, 3, 2, 5, 6] 
function mix(array) {
  const resultedArray = [];

  while (array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);

    resultedArray.push(array[randomIndex]);

    array.splice(randomIndex, 1);
  }

  return resultedArray;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const arr3 = [1, 2, 3, 4, 5, 6, 7];

console.log(mix(arr1));
console.log(mix(arr2));
console.log(mix(arr3));