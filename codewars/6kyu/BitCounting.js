/* https://www.codewars.com/kata/526571aae218b8ee490006f4 */
var countBits = function (n) {
	const base2 = n.toString(2);
	const array = base2.split("");

	let index = 0;
	array.map(el => (el === "1" ? index++ : ""));

	return index;
};
