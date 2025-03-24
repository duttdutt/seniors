// https://www.codewars.com/kata/57b06f90e298a7b53d000a86
function queueTime(customers, n) {
  if (!customers.length) return 0;

  const tills = new Array(n).fill(0);

  for (const time of customers) {
    const minTillIndex = tills.indexOf(Math.min(...tills));

    tills[minTillIndex] += time;
  }

  return Math.max(...tills);
}
