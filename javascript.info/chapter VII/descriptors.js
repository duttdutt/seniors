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
let obj = { _a: 1 };

Object.defineProperty(obj, "a", {
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
let obj = {};

Object.defineProperty(obj, "prop", {
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
})