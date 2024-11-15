/* -------------------- Задача 1 -------------------- */
/**
 * Возвращает число, составленное из цифр входного числа, отсортированных в убывающем порядке.
 *
 * @param {number} numbers - Число, цифры которого нужно отсортировать.
 * @returns {number} Число, состоящее из цифр входного числа, отсортированных в убывающем порядке.
 */
const descendingOrder = (numbers) => { };

console.log(descendingOrder(42145)); // 54421
console.log(descendingOrder(145263)); // 654321
console.log(descendingOrder(123456789)); // 987654321

/* -------------------- Задача 2 -------------------- */
/**
 * Находит наибольшее и наименьшее числа в строке, разделённой пробелами.
 *
 * @param {string} numbers - Строка чисел, разделённых пробелами.
 * @returns {string} Строка, содержащая наибольшее и наименьшее число: "max min".
 */
const highAndLow = (numbers) => { };

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"

/* -------------------- Задача 3 -------------------- */
/**
 * Возвращает максимальное значение, которое можно получить, переставив цифры в числе.
 *
 * @param {number} number - Число, из цифр которого нужно получить максимальное значение.
 * @returns {number} Максимальное значение, составленное из цифр числа.
 */
const getNumMax = (number) => { }

console.log(getNumMax(12)); // 21
console.log(getNumMax(111111119)); // 911111111
console.log(getNumMax(1798)); // 9871

/* -------------------- Задача 4 -------------------- */
/**
 * Добавляет метод last к массиву, который возвращает последний элемент массива,
 * или -1, если массив пуст.
 *
 * @returns {number} Последний элемент массива, или -1, если массив пуст.
 */
Array.prototype.last = function () { }

console.log([].last()); // -1
console.log([1].last()); // 1
console.log([1, 2, 3].last()); // 3

/* -------------------- Задача 5 -------------------- */
/**
 * Возвращает массив чисел, кратных заданному числу.
 *
 * @param {number} number - Число, к которому должны быть кратны элементы массива.
 * @param {number} length - Длина массива, который нужно вернуть.
 * @returns {number[]} Массив чисел, кратных number, длиной length.
 */
const arrayOfMultiples = (number, length) => { }

console.log(arrayOfMultiples(7, 5)); // [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10)); // [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6)); // [17, 34, 51, 68, 85, 102]

/* -------------------- Задача 6 -------------------- */
/**
 * Возвращает третий по величине уникальный элемент из массива чисел.
 * Если третий по величине элемент не существует, возвращает наибольший элемент.
 *
 * @param {number[]} numbers - Массив чисел.
 * @returns {number} Третий по величине уникальный элемент или наибольший элемент, если третьего нет.
 */
const getThirdMaxNum = (numbers) => { }

/* -------------------- Задача 7 -------------------- */
/**
 * Заменяет слова 'zero' и 'one' на '0' и '1' соответственно (регистр не важен), 
 * игнорируя остальные слова. Возвращает строку, длина которой кратна 8.
 *
 * @param {string} str - Строка, содержащая слова, которые нужно заменить на '0' и '1'.
 * @returns {string} Строка, содержащая только '0' и '1', длина которой кратна 8.
 */
const textToBinary = (str) => { }

console.log(textToBinary("zero one zero one zero one zero one")); //  "01010101"
console.log(textToBinary("Zero one zero ONE zero one zero one")); //  "01010101"
console.log(textToBinary("zero one zero one zero one zero one one two")); //  "01010101"
console.log(textToBinary("zero one zero one zero one zero three")); // ""
console.log(textToBinary("one on")); // ""