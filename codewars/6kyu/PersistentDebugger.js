/* https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec */
const persistence = num => {
	let count = 0;
	num = num.toString();

	while (num.length > 1) {
		num = num
			.split("")
			.map(e => Number(e))
			.reduce((acc, curr) => acc * curr)
			.toString();
		count++;
	}

	return count;
};
