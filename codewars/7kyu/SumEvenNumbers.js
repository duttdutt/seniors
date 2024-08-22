/* https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3 */

function sumEvenNumbers(input) {
	return input.reduce(
		(acc, curr) => (curr % 2 === 0 ? (acc += curr) : acc),
		0
	);
}
