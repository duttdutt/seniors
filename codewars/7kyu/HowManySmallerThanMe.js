/* https://www.codewars.com/kata/56a1c074f87bc2201200002e/ */
function smaller(nums) {
	let result = [];
	let count = 0;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			// `j` need to be greater, than `i` on 1
			// because we checking nums[i] and next nums[i + 1](nums[j])
			if (nums[i] > nums[j]) {
				count++;
			}
		}
		result.push(count); // push our count of greater of `j = i + 1`
		count = 0; // reset
	}

	return result;
}
