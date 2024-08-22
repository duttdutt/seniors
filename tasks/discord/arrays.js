/**
 * Реализуйте функцию moveToStart, которая принимает массив и число n.
 * Функция должна переставить n элементов массива из конца в начало.
 * Если второй аргумент больше или равен длине массива, то должен быть
 * возвращен новый массив, порядок элементов которого совпадает с изначальным.
 * Функция должна возвращать новый массив, а не мутировать старый.
 */
function moveToStart(arr, n) {
	if (n >= arr.length) {
		return [...arr];
	}

	const endArr = arr.slice(n - 1);
	const startArr = arr.slice(0, arr.length - n);

	return [...endArr, ...startArr];
}

console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]
console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 21
console.log(moveToStart([1, 2, 3, 4, 5], 10)); // [1, 2, 3, 4, 5]

/**
 * Реализуйте функцию hasArrays, которая принимает массив данных разных типов
 * и возвращает true, если этот массив содержит массив внутри себя. Если нет,
 * функция должна вернуть false.
 */
function hasArrays(arr) {
	for (const index of arr) {
		if (!Array.isArray(index)) return true;
	}

	return false;
}

const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
console.log(hasArrays(data1)); // true

const data2 = [];
console.log(hasArrays(data2)); // false

/**
 * Реализуйте функцию getNumbersByParity, которая принимает массив чисел в
 * качестве первого аргумента и строку "even" или "odd" в качестве второго.
 * Функция должна вернуть новый массив, состоящий из четных чисел, если вторым
 * аргументом было передано "even" и нечетных, если было передано "odd".
 * Оба аргумента функции обязательны. Первый обязательно будет массивом, а
 * второй - строкой "even"/"odd".
 */
function getNumbersByParity(arrOfNums, type) {
	return arrOfNums.filter((_v, i) =>
		type === "even" ? i % 2 === 1 : i % 2 === 0
	);
}

const data = [1, 2, 3, 4, 5, 6];

console.log(getNumbersByParity(data, "even")); // [2, 4, 6];
console.log(getNumbersByParity(data, "odd")); // [1, 3, 5];
