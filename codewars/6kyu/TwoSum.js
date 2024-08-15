/* https://www.codewars.com/kata/52c31f8e6605bcc646000082 */
function twoSum(numbers, target) {
	const result = [];

	for (let i = 0; i < numbers.length; i++) {
		for (let j = 1; j < numbers.length; j++) {
			if (target === numbers[i] + numbers[j]) {
				result.push(i, j);
				break;
			}
		}
		if (result.length > 0) break;
	}

	return result;
}
