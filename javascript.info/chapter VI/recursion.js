function sumToLoop(n) {
	let result = 0;

	for (let i = 1; i <= n; i++) {
		result += i;
	}

	return result;
}

function sumToRecursion(n) {
	if (n === 0) return n;

	return n + sumToRecursion(--n);
}

function sumToProgression(n) {
	return (n * (1 + n)) / 2;
}

// Factorial
function getFactorial(n) {
	if (n === 0) return 0;
	if (n === 1) return 1;

	return n * getFactorial(n - 1);
}
// Fibonacci
function getFibonacci(n, def = 0) {
	return n <= 1 ? n : getFibonacci(n - 1) + getFibonacci(n - 2);
}

console.log(getFibonacci(3)); // 2
console.log(getFibonacci(7)); // 13
console.log(getFibonacci(77)); // 5527939700884757
