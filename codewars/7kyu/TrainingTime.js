// /* https://www.codewars.com/kata/572ab0cfa3af384df7000ff8 */
function shuffleIt(array, ...otherArguments) {
	for (let i = 0; i < otherArguments.length; i++) {
		let a = otherArguments[i];
		let temp = array[a[0]];

		array[a[0]] = array[a[1]];
		array[a[1]] = temp;
	}

	return array;
}
