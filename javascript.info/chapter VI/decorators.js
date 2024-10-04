let user = { name: "John" };
let admin = { name: "Admin" };
/* ----- .call(context, args) realization ----- */
function sayHi(a, b, c) {
  console.log("this.name:", this.name);
  return a + b + c;
}

Function.prototype.myCall = function (context, ...args) {
  context._thisProperty = this;

  const result = context._thisProperty(...args);
  delete context._thisProperty;

  return result;
};

sayHi.myCall(user, 3, 2, 1);
sayHi.myCall(admin, 3, 2, 1);
/* ----- .apply(context, args) realization ----- */
function sayHi(...args) {
  console.log("this.name:", this.name);
  return args; // [1, 2, 3]
}

Function.prototype.myApply = function (context, args) {
  context._thisProperty = this;

  const result = context._thisProperty(args);
  delete context._thisProperty;

  return result;
};

sayHi.apply(user, [1, 2, 3]);
sayHi.apply(admin, [1, 2, 3]);

/* ----- TASKS FROM LEARN.JS ----- */
// Создайте декоратор spy(func), который должен возвращать обёртку, которая
// сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.
function work(a, b) {
  return a + b; // произвольная функция или метод
}

function spy(func) {
  wrapper.calls = [];

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args)
  }

  return wrapper
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}
// Delay
function delay(func, time = 1000) {
  return function wrapper() {
    setTimeout(() => func.apply(this, arguments), time)
  }
}
// Debounce
function debounce(func, duration) {
  let timeout;

  return function(...args) {
    const effect = () => {
      timeout = null;
      return func.apply(this, args)
    }

    clearTimeout(timeout);
    timeout = setTimeout(effect, duration)
  }
}