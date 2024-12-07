function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

const generator = generateSequence();

console.log(generator); // Object [Generator] {}

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: true }

/* ----------------------------------------------------- */
// Перебор до 3 и игнорирование 'return'
console.log("-------------------------------------------");
function* generateSequence1() {
  yield 1;
  yield 2;
  return 3;
}

for (const value of generateSequence1()) {
  console.log("value:", value); // 1, 2
}

console.log("-------------------------------------------");
// Перебор до 3
function* generateThreeYields() {
  yield 1;
  yield 2;
  yield 3;
}

for (const value of generateThreeYields()) {
  console.log("value:", value);
}

// Так как генераторы - перебираемые объекты, то можно
// использовать spread:
let someArray = [0, ...generateThreeYields(), 4]
console.log("someArray", someArray); // [0, 1, 2, 3, 4]


console.log("-------------------------------------------");
/* Генераторы в перебираемых объектах */
const someObj = {
  from: 0,
  to: 4,

  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
}
console.log("[...someObj]:", [...someObj]);

function* generateSequence4(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

console.log("-------------------------------------------");
/* Генераторы в перебираемых объектах */
function* generatePasswordCodes() {
  yield* generateSequence4(48, 57);
  yield* generateSequence4(65, 90);
  yield* generateSequence4(97, 122);
}

let str = '';

for (let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

console.log(str);

function* gen() {
  // Передаём вопрос во внешний код и ожидаем ответа
  let result = yield "2 + 2 = ?"; // (*)

  console.log(result);
}

let generator3 = gen();

let question = generator3.next().value; // <-- yield возвращает значение

generator3.next(4); // --> передаём результат в генератор


const customIterable = {
  *[Symbol.iterator]() {
    yield 'Custom 1';
    yield 'Custom 2';
    return 'Custom Done';
  },
};


function* generatorWithNestedYield() {
  yield* [1, 2, 3];
  yield* (function*() {
    yield 4;
    yield 5;
  })();
  yield* new Set([6, 7, 8, 9])
  const result = yield* customIterable;
  yield `result: ${result}`;
  yield* {}
}

for (const value of generatorWithNestedYield()) {
  console.log(value);
}