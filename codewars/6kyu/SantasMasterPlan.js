/* https://www.codewars.com/kata/52afd1fe8f7c52a0e1000304 */
function getAttendees(peopleInvited, responses) {
	for (let i = 0; i < responses.length; i++) {
		if (responses[i].response === "declined") {
			const index = peopleInvited.indexOf(responses[i].name);
			peopleInvited.splice(index, 1);
		}
	}

	return peopleInvited;
}
