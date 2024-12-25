/* ╭─────────── testing ────────────╮ */
eval(); // undefined
eval("1 + 1"); // "2"
eval(2); // 2
eval(null); // null

// eval(function () {});
// console.log(test()); // ReferenceError
/* ╰────────────────────────────────╯ */
eval(
  (function () {
    return 1;
  })(),
); // 1

eval(`
class Test {
  constructor(testProp) {
    this.testProp = testProp;
  }

  getTestProp() {
    return this.testProp;
  }
}

const test = new Test('test')
console.log(test.getTestProp())
`); // 'test'

/* ╭─────────── window.eval vs eval ────────────╮ */ // case 1
let someVariable = 0;
if (true) {
  let someVariable = 1;
  eval("console.log(someVariable)"); // 1
}

// case 2
someVariable = 0;
if (true) {
  let someVariable = 1;
  window.eval("console.log(someVariable)"); // 0
}
/* ╰────────────────────────────────────────────╯ */
