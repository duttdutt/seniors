// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
function findOutlier(integers) {
  const firstThreeElements = integers.slice(0, 3);
  const evenCount = firstThreeElements.filter(
    (integer) => integer % 2 === 0
  ).length;

  const isArrayEven = evenCount >= 2;
  return integers.find((integer) =>
    isArrayEven ? integer % 2 !== 0 : integer % 2 === 0
  );
}
