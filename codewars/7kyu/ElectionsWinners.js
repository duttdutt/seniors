// https://www.codewars.com/kata/58881b859ab1e053240000cc
// First Solution:
function electionsWinners(votes, voters) {
  let result = 0;
  votes.sort((a, b) => a - b)
  const winnerRightNow = votes.at(-1);

  do {
    if (votes.at(-1) > votes.at(-2)) {
      result += 1;
      votes.pop();
    }
  } while (false)

  for (const candidate of votes) {
    const amountOfVotesPlusRemainingVoters = candidate + voters;
    if (amountOfVotesPlusRemainingVoters > winnerRightNow) {
      result += 1;
    }
  }

  return result;
}
// Second solution:
function electionsWinners(votes, voters) {
  let max = Math.max(...votes);

  const winners = votes.filter(voteCount => voteCount + voters > max).length;
  const ties = votes.filter(voteCount => voteCount === max).length;

  return voters
    ? winners
    : Number(ties === 1);
}
