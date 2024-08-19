/* www.codewars.com/kata/5b16490986b6d336c900007d */
function myLanguages(results) {
	let result = [];

	for (const skill of Object.keys(results)) {
		if (results[skill] >= 60) {
			result.push([skill, results[skill]]);
		}
	}

	return result.sort((a, b) => b[1] - a[1]).map(item => item[0]);
}
