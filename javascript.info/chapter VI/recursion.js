/** Разворачиваем вложенные массивы без flat()
 * flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
 * flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']
 */
// Через рекурсию
function flatten(...args) {
  return args.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(...curr) : curr),
    []
  );
}
// Через 'стек'
function flatten(...args) {
  const result = [];

  while (args.length) {
    const el = args.shift(); // last element

    if (Array.isArray(el)) {
      args.unshift(...el);
      continue;
    }

    result.push(el);
  }

  return result;
}

/** Глубокое копирование объекта */
const object = {
  a: 1,
  b: {
    c: {
      d: [],
    },
  },
};

function deepCopy(object) {
  const deepCopyObject = {};

  for (const prop in object) {
    if (typeof object[prop] === "object") {
      deepCopyObject[prop] = deepCopy(object[prop]);
    } else if (Array.isArray(object[prop])) {
      deepCopyObject[prop] = object[prop].map((el) => deepCopy(el));
    } else {
      deepCopyObject[prop] = object[prop];
    }
  }

  return deepCopyObject;
}

console.log(object === deepCopy(object));

// Снижает нагрузку на стек вызовов и предотвращает переполнение стека
/* Факториал + Хвостовый факториал */
function factorial(n) {
  if (n === 1) return 1;

  return n-- * factorial(n);
}
console.log(factorial(5));

function factorialTail(n, acc = 1) {
  if (n === 1) return acc;

  return factorialTail(n - 1, acc * n);
}
console.log(factorialTail(5));

/* Сумма элементов + Хвостовая сумма элементов */
function arraySum(arr) {
  if (arr.length === 0) return 0;

  return arr[0] + arraySum(arr.slice(1));
}
console.log("arraySum:", arraySum([1, 2, 3, 4, 5]));

function arraySumTail(arr, accumulator = 0) {
  if (arr.length === 0) return 0;

  return arraySumTail(arr.slice(1), accumulator + arr[0]);
}
console.log("arraySumTail:", arraySumTail([1, 2, 3, 4, 5]));
