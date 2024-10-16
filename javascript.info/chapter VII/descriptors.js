/* Задача 1. Discord */
let obj = {
    testProp: 123,
}

Object.defineProperty(obj, 'logTestProp', {
  value: function() {
    return this.testProp;
  }
});

obj.logTestProp(); // expect 123
obj.testProp = 345;
obj.logTestProp(); // expect 345

/* Задача 2. Минимальные и максимальные значения для свойства 0-10 */
let obj2 = { _a: 1 };

Object.defineProperty(obj2, "a", {
  get() {
    return this._a;
  },

  set(value) {
    if (value < 1 || value > 10) {
      throw new RangeError("Bad range.");
    }

    this._a = value;
  },
});

/* Задача 3. Счетчик доступа к свойству */
let obj3 = {};

Object.defineProperty(obj3, "prop", {
  get() {
    if (typeof this._countGet === "undefined")
      this._countGet = 0;

    return this._countGet++;
  },

  set(value) {
    if (typeof this._countSet === "undefined")
      this._countSet = 0;

    this._countSet++;

    this.value = value;
  }
});

/* Задача 4. Запретите изменение свойства */
const user = {
  name: 'Ivan'
}

Object.defineProperty(user, 'name', {
  writable: false
})

/* Задача 5. Оба свойства перечисляемы. Запретите удаление свойства model. */
const car = {
  brand: 'bmw',
  model: 'x5'
}

Object.defineProperties(car, {
  model: {
    configurable: false
  }
})

/* Задача 6. Добавьте геттер area, который будет возвращать площадь прямоугольника */
const rectangle = {
  width: 70,
  height: 20,
  get area() {
    return this.width * this.height
  }
}

/* Задача 7. Добавьте геттер для свойства age, который будет рассчитывать и возвращать возраст */
const person = {
  birthYear: 2000
}
Object.defineProperty(person, "age", {
  get() {
    return new Date().getFullYear() - this.birthYear;
  }
});
console.log("------------");

const objCheck = {
  c: 2,
  d: 4
}
Object.defineProperties(obj, {
  a: { enumerable: false },
  b: { enumerable: false }
});
for (const prop in objCheck) {
  console.log(prop); // null
}
console.log("Object.keys(objCheck) if enumerable:", Object.keys(objCheck)); // []
console.log("------------");

/* --- Object static methods --- */
{ /* Object.preventExtensions(obj) - запретить добавление новый свойств */
  const obj = { a: 1 };
  console.log("kek:", Object.getOwnPropertyDescriptors(obj));
  Object.preventExtensions(obj);
  console.log("lol:", Object.getOwnPropertyDescriptors(obj));

  obj.a = 1;
  console.log("obj before deleting a:", obj); // не изменился
  delete obj.a;
  console.log("obj after deleting a:", obj); // не запрещает удалять
  // Object.defineProperty(obj, 'a', { value: 1 }); // Cannot define property a, object is not extensible
  // ошибка при создании св-ва через дескриптор
  /* Object.isExtensible(obj) - проверяет, можно ли добавлять свойства */
  console.log("Object.isExtensible(obj):", Object.isExtensible(obj)); // false
  console.log("------------");
}
{ /* Object.seal(obj) */
  const obj = {
    a: 1,
    b: 2
  }

  console.log("Descriptors of obj.a before sealing:", Object.getOwnPropertyDescriptor(obj, 'a'));
  // { value: 1, writable: true, enumerable: true, configurable: true }

  Object.seal(obj); // configurable -> false

  console.log("Descriptors of obj.a after sealing:", Object.getOwnPropertyDescriptor(obj, 'a'));
  // { value: 1, writable: true, enumerable: true, configurable: false }
  /* Object.isSealed(obj) */
  console.log("Object.isSealed(obj):", Object.isSealed(obj)); // true, obj is sealed
  console.log("------------");
}
{ /* Object.freeze(obj) замораживает объект напрочь(writable: false, +Object.seal(configurable: false) */
  const obj = { a: 1, b: 2 };
  console.log("Descriptors before freeze:", Object.getOwnPropertyDescriptors(obj));
  Object.freeze(obj);
  console.log("Descriptors after freeze:", Object.getOwnPropertyDescriptors(obj)); // writable+configurable -> false
  /* Object.isFrozen(obj) */
  console.log("Object.isFrozen(obj):", Object.isFrozen(obj));
}

// Object -> Test1 -> Test2
function Test2() {
  this.name = 'Vasya';
  this.surname = 'Petrov';
}
Test2.prototype.getFullName = function () {
  return this.name + ' ' + this.surname;
}

new Test2().__proto__ // Test2.prototype
new Test2().__proto__.prototype
new Test2().__proto__.__proto__