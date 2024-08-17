/* https://www.codewars.com/kata/5287e858c6b5a9678200083c/javascript */
function narcissistic(value) {
	let arr = `${value}`.split("");

	let sum = arr.reduce((acc, curr) => acc + Math.pow(curr, arr.length), 0);

	return sum === value;
}
