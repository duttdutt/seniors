/* --- Прототипное наследование --- */
/** Все объекты имеют скрытое, внутреннее свойство [[Prototype]].
  * Оно либо равно null, либо ссылается на другой объект(прототип).
  * * Это св-во позволяет нам получить св-во, несуществующее в нашем объекте,
  * * а существующее в прототипе(механизм прототипного наследования).
  * * Такие св-ва называются унаследованными(inherited props).
  * Это св-во можно задать с помощью __proto__ и Object.setPrototypeOf()
  * * __proto__ — deprecated и геттер/сеттер для [[Prototype]].
 */
let obj2 = { a: 1 };
let obj = {
  __proto__: obj2,
};
console.log(obj.__proto__); // { a: 1 }
obj.__proto__ = obj2.b = { c: 1 };
console.log(obj.__proto__); // { c: 1 }
console.log(obj.c); // 1
/** Цепочка проотипов может быть любой длины.
  * Свои методы > унаследованные методы. Сначала ищет в себе, потом бежит по прототипам.
  * Прототипы не влияют на this: всегда объект перед точкой.
  * for...in пробегается и по своим, и по наследованным(у которых enumerable: true).
  * Object.keys/values/entries только по своим.
  * Проверка на свое св-во: targetObj.hasOwnProperty(key).
 */

/* --- F.prototype --- */
/** Все ф-ии конструкторы имеют св-во prototype. Оно станет [[Prototype]],
  * после создания объекта(new F). */
{
  function D() {};
  const d = new D();
  console.log(Object.getPrototypeOf(D) === Function.prototype); // true
  console.log(Object.getPrototypeOf(d) === D.prototype); // true
// prototype можно изменить явно:
  D.prototype = Object.create(null);
  const newD = new D();
  console.log(Object.getPrototypeOf(newD) === Function.prototype); // false

  D.prototype = obj;
  const newD2 = new D();
  console.log(Object.getPrototypeOf(newD2) === obj); // true
}

// constructor ссылается на функцию-конструктор:
{
  function D() {}
  const d = new D();
  console.log(d.constructor === D); // true

  D.prototype = { a: 1 };
  const c = new D();
  console.log(c.constructor === D); // false

  D.prototype = { a: 1, constructor: D };
  const f = new D();
  console.log(f.constructor === D); // true
}

console.log(Array.prototype === Object.getPrototypeOf(new Array())); // true
console.log(Array.__proto__ === new Array().prototype); // false
console.log(Array.__proto__ === Function.prototype); // true


console.log(typeof Function.prototype); // 'function'
console.log(Array.isArray(Array.prototype)); // true
console.log(typeof Map.prototype); // 'object'
console.log(typeof Set.prototype); // 'object'
console.log(Array.isArray(Set.prototype)); // false
console.log(typeof Date.prototype); // 'object'


console.log(Object.getPrototypeOf(Error.prototype) === Object.prototype); // true
console.log(Object.getPrototypeOf(Error) === Function.prototype); // true
console.log(Object.getPrototypeOf(Symbol.prototype) === Object.prototype); // true
console.log(Object.getPrototypeOf(Symbol) === Function.prototype); // true
console.log(Object.getPrototypeOf(JSON) === Object.prototype); // true
console.log(Object.getPrototypeOf(Math) === Object.prototype); // true
console.log(JSON.__proto__ === Object.prototype); // true
console.log(Math.__proto__ === Object.prototype); // true


console.log(Object.getPrototypeOf(3) === Number.prototype); // true
console.log(Object.getPrototypeOf(new Number(3)) === Number.prototype); // true



// Add method "f.defer(ms)" to functions
Function.prototype.defer = function(message, delay = 0) {
  setTimeout(() => {
    console.log(message);
  }, delay)
}

function f() {
  alert("Hello!");
}

f.defer('Hello', 1000); // shows "Hello!" after 1 second

// Add the decorating "defer()" to functions
Function.prototype.defer2 = function(delay = 0) {
  return function(a, b) {
    setTimeout(() => {
      console.log(a + b);
    }, delay)
  }
}

function f(a, b) {
  alert( a + b );
}

f.defer2(1000)(1, 2); // shows 3 after 1 second

const someObj = {
  a: 1,
  b: true
}

console.log(Object.setPrototypeOf(someObj.a, {})); // примитивы не работают
// console.log(Object.setPrototypeOf(null, {})); // ошибка при targetObj === null/undefined
console.log(Object.setPrototypeOf(someObj.a, {}))
