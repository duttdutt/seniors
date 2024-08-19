/* https://www.codewars.com/kata/550f22f4d758534c1100025a */
function dirReduc(arr) {
	const oppositesEntries = {
		NORTH: "SOUTH",
		SOUTH: "NORTH",
		WEST: "EAST",
		EAST: "WEST"
	};

	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (result[result.length - 1] === oppositesEntries[arr[i]]) {
			result.pop();
		} else {
			result.push(arr[i]);
		}
	}

	return result;
}
