// Scheduling: setTimeout and setInterval
// 1
function printNumbers(from, to) {
  let curr = from;

  let timerId = setInterval(() => {
    if (curr === to) {
      clearInterval(timerId);
    }

    curr++;
  }, 1000);
}

console.log(printNumbers(5, 10));
// 2
function printNumbers(from, to) {
  let curr = from;

  setTimeout(function go() {
    if (curr < to) {
      setTimeout(go, 1000);
    }

    curr++;
  }, 1000);
}

console.log(printNumbers(5, 10));