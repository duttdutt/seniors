/* https://www.codewars.com/kata/541c8630095125aba6000c00 */
function digitalRoot(n) {
	if (String(n).length === 1) return n;

	let num = String(n)
		.split("")
		.map(el => +el)
		.reduce((acc, curr) => acc + curr, 0);

	return digitalRoot(num);
}
