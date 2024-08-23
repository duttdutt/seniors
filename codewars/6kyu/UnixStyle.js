/* https://www.codewars.com/kata/52249faee9abb9cefa0001ee */
function uniq(a) {
	for (let i = 1; i < a.length; i++) {
		if (a[i] === a[i - 1]) {
			a.splice(i, 1);
			i--;
		}
	}
	return a;
}

// OR

function uniq2(a) {
	return a.filter((element, index) => element !== a[index + 1]);
}
