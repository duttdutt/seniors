/* https://www.codewars.com/kata/5270d0d18625160ada0000e4 */
function score(dice) {
	let points = 0;
	let count1 = 0;
	let count2 = 0;
	let count3 = 0;
	let count4 = 0;
	let count5 = 0;
	let count6 = 0;

	for (let i = 0; i < dice.length; i++) {
		dice[i] === 1 ? count1++ : "";
		dice[i] === 2 ? count2++ : "";
		dice[i] === 3 ? count3++ : "";
		dice[i] === 4 ? count4++ : "";
		dice[i] === 5 ? count5++ : "";
		dice[i] === 6 ? count6++ : "";
	}

	if (count1 >= 3) {
		points += 1000;
		count1 -= 3;
	}
	if (count2 >= 3) {
		points += 200;
	}
	if (count3 >= 3) {
		points += 300;
	}
	if (count4 >= 3) {
		points += 400;
	}
	if (count5 >= 3) {
		points += 500;
		count5 -= 3;
	}
	if (count6 >= 3) {
		points += 600;
	}

	points += count1 * 100;
	points += count5 * 50;

	return points;
}
