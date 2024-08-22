/* https://www.codewars.com/kata/56b1eb19247c01493a000065 */

function uniqueSum(lst) {
	return lst.length
		? Array.from(new Set(lst)).reduce((acc, curr) => (acc += curr), 0)
		: null;
}
