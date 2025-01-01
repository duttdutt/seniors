/** Thenable объекты
 * Объекты, содержащие метод then.
 */

/* ------------- Thenable: Object ------------- */
const thenableObject = {
  _inputValue: null,
  get inputValue() {
    return this._inputValue;
  },
  set inputValue(value) {
    this._inputValue = value;
  },
  then(resolve, reject) {
    setTimeout(() => {
      return resolve(Math.pow(this.inputValue, 3));
    }, 1000);
  },
};

new Promise((res, _) => res(0))
  .then((result) => {
    thenableObject.inputValue = 3;
    return thenableObject;
  })
  .then((result) => {
    console.log("result on line 16:", result);
  });

/* ------------- Thenable: Function Constructor ------------- */
function ThenableFC(inputValue) {
  this.inputValue = inputValue;

  this.then = (resolve, reject) => {
    setTimeout(() => {
      return resolve(Math.pow(this.inputValue, 3));
    }, 2000);
  };
}

new Promise((res, _) => res(0))
  .then((result) => {
    return new ThenableFC(4);
  })
  .then((result) => {
    console.log("result on line 19:", result); // 27, works
  });

/* ------------- Thenable: Class ------------- */
class ThenableClass {
  constructor(inputValue) {
    this.inputValue = inputValue;
  }

  then(resolve, reject) {
    setTimeout(() => {
      return resolve(Math.pow(this.inputValue, 3));
    }, 3000);
  }
}

new Promise((res, _) => res(0))
  .then((result) => {
    return new ThenableClass(5);
  })
  .then((result) => {
    console.log("result on line 38:", result); // 1000, works
  });
