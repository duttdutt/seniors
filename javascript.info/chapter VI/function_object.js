function foo() {
  return 1;
}

console.log(typeof foo); // function
console.log(foo.toString()); // "function f() {}"
console.log(foo.valueOf()); // f() {}
console.log(foo.valueOf()()); // 1

/* caller property */
function myFunc() {
  if (myFunc.caller === null) return "The function was called from the top!";
  else return `This function's caller was ${myFunc.caller}`;
}

// This function's caller was function `a() { return myFunc(); }`
console.log(
  (function a() {
    return myFunc();
  })()
);
// The function was called from the top!
console.log(
  (function a() {
    return myFunc;
  })()()
);

/* name property */
function functionDeclaration() {}

console.log(functionDeclaration.name); // 'functionDeclaration'

const functionExpression = function () {};
console.log(functionExpression.name); // 'functionExpression'

const variableExpression = function functionExp() {};
console.log(variableExpression.name); // 'functionExp'

const someObject = {
  method: () => {},
};
console.log(someObject.method.name); // 'method'

const someArray = [function functionName() {}, function () {}];
console.log(someArray[0].name); // 'functionName'
console.log(someArray[1].name); // ''

/* length property */
console.log(function f() {}.length); // 0
console.log(function f(a, b) {}.length); // 2
console.log(function f(a, b, ...rest) {}.length); // 2, rest не учитывается

/* can't change name and length properties */
{
  function f(a, b, c) {
    return a + b + c;
  }

  f.length = 0;
  console.log(f.length); // 3, длина не изменилось
}
{
  function f() {}
  console.log(f.name); // 'f'
  f.name = "F";
  // F.name; // Error
  console.log(f.name); // 'f'
}

/* custom properties */
{
  function f() {}

  f.prop2 = { a: { b: 1 } };
  console.log(f.prop2.a.b); // 1

  for (const prop in f) {
    console.log(f[prop]); // prop2: { a: {...} }
  }
}

// Invokation counter
function makeCounter() {
  return ++makeCounter.counter;
}
makeCounter.counter = 0;

makeCounter(); // 1
makeCounter(); // 2
makeCounter(); // 3
console.log(makeCounter.counter); // 3

// Property versus closure
function createClickCounter() {
  return {
    increment() {
      return ++createClickCounter.count;
    },
  };
}
createClickCounter.count = 0;

createClickCounter().increment(); // 1
createClickCounter().increment(); // 2
createClickCounter().increment(); // 3
console.log("count before reset: " + createClickCounter.count); // 3
createClickCounter.count = 0;
createClickCounter().increment(); // 1
console.log("count after reset: " + createClickCounter.count); // 1

/* Named Function Expressions */
let a = function () {}; // Function Expression
let b = function f() {}; // Named Function Expression

console.log(a.name); // 'a'
console.log(b.name); // 'f'

{
  let bar = function foo(status) {
    // (*)
    if (status === "Guest") {
      console.log("Guest, you are logged.");
    } else if (status === "Admin") {
      console.log("Hello, Admin!");
    } else {
      /* не работает, пойдет искать в глобальный контекст,
        где bar = null */
      // bar("Guest");
      console.log("Reinvoking...");
      foo("Guest");
      return "Reinvoked!";
    }
  };

  let ref = bar; // Создали новую ссылку
  bar = null; // Обнулили изначальную ссылку

  console.log(ref()); // "Guest, you are logged."
}

/* ========================= Tasks ========================== */
// Установка и уменьшение значения счётчика
// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:
// - counter() должен возвращать следующее значение (как и раньше).
// - counter.set(value) должен устанавливать счётчику значение value.
// - counter.decrease() должен уменьшать значение счётчика на 1.
{
  function makeCounter() {
    counter.count = 0;

    function counter() {
      return ++counter.count;
    }

    counter.set = function (v) {
      counter.count = v;
    };

    counter.decrease = function () {
      return --counter.count;
    };

    return counter;
  }

  let counter = makeCounter();
  console.log(counter.count); // 0
  counter();
  counter();
  counter();
  counter();
  console.log(counter.count); // 4
  counter.set(0);
  console.log(counter.count); // 0
  counter.decrease();
  counter.decrease();
  counter.decrease();
  console.log(counter.count); // -3
}

// Напишите функцию sum, которая бы работала следующим образом:
{
  function sum(a) {
    let currentSum = a;

    function innerSum(b) {
      currentSum += b;
      return innerSum;
    }

    innerSum[Symbol.toPrimitive] = function () {
      return currentSum;
    };

    return innerSum;
  }

  console.log(sum(1)(2)(3) == 6);
  console.log(sum(5)(-1)(2) == 6);
  console.log(sum(6)(-1)(-2)(-3) == 0);
  console.log(sum(0)(1)(2)(3)(4)(5) == 15);
}
