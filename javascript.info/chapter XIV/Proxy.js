const targetObject = {
  firstName: "John",
  secondName: "Doe",
};

const handlerObject = {};

/**
 * @param {*} target Объект для прокси.
 * @param {ProxyHandler} handler Объект с ловушками(методы), срабатывающие при определенных ситуациях.
 * @returns {*} any
 */
let proxy = new Proxy(targetObject, handlerObject);
/**  ⬇
 * Proxy(Object)
 ** [[Handler]]: {},
 ** [[Target]]: {
 **   firstName: "John",
 **   secondName: "Doe"
 ** },
 ** [[Is Revoked]]: false
 */

// ╭──────────────────────── Ловушки ────────────────────────╮
/**
 * @description get для чтения.
 *
 * @param {*} targetObject Объект для прокси.
 * @param {string|symbol} property Имя свойства.
 * @param {object} receiver
 *
 * @example Значения по умолчанию.
 */
let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) return target[prop];

    return "Retry, please.";
  },
});

console.log(numbers[1]); // 1
console.log(numbers[100]); // 'Retry, please.'

/**
 * @description set при записи.
 *
 * @param {*} targetObject Объект для прокси.
 * @param {string|symbol} property Имя свойства.
 * @param {*} value Значение свойства.
 * @param {object} receiver
 * @returns {boolean} При успешной записи должен возвращать `true`(или будет TypeError), иначе `false`.
 *
 * @example Значения по умолчанию.
 */
console.log("------------- Method 'set' -------------");
let otherNumbers = [];

otherNumbers = new Proxy(otherNumbers, {
  set(target, prop, value) {
    if (typeof value === "number" && Number.isFinite(value)) {
      target[prop] = value;
      return true;
    }

    console.log("Retry, please.");
    return false;
  },
});

console.log("otherNumbers.push(1):", otherNumbers.push(1));
console.log("otherNumbers.push(null):", otherNumbers.push(null)); // TypeError
// ╰─────────────────────────────────────────────────────────╯
