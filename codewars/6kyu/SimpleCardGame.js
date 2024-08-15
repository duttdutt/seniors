/* https://www.codewars.com/kata/53417de006654f4171000587 */
function winner(deckSteve, deckJosh) {
	const cards = new Map()
		.set("2", 2)
		.set("3", 3)
		.set("4", 4)
		.set("5", 5)
		.set("6", 6)
		.set("7", 7)
		.set("8", 8)
		.set("9", 9)
		.set("T", 10)
		.set("J", 11)
		.set("Q", 12)
		.set("K", 13)
		.set("A", 14);

	let steveCount = 0;
	let joshCount = 0;

	for (let i = 0; i < deckSteve.length; i++) {
		if (cards.get(deckSteve[i]) > cards.get(deckJosh[i])) {
			steveCount++;
		} else if (cards.get(deckSteve[i]) < cards.get(deckJosh[i])) {
			joshCount++;
		}
	}

	if (steveCount > joshCount) {
		return `Steve wins ${steveCount} to ${joshCount}`;
	} else if (joshCount > steveCount) {
		return `Josh wins ${joshCount} to ${steveCount}`;
	} else {
		return "Tie";
	}
}
