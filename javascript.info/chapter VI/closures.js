/* --------------------------------------------------------------- */
/* Написать функцию, которая принимает число N и возвращает функцию,
 * вызов которой первые N раз возвращает 'yes', а потом – 'no'. */
function canGetCount(n) {
  return () => {
    if (n === 0) return "no";
    n--;
    return "yes";
  };
}

const getOne = canGetCount();

console.log(getOne() === "yes"); // true
console.log(getOne() === "yes"); // true
console.log(getOne() === "no"); // false

/* --------------------------------------------------------------- */
let sum = 0;
var summator = function (val) {
  return (sum += val);
};

console.log(summator(1)); // 1
console.log(summator(5)); // 6
console.log(summator(3)); // 9

/* --------------------------------------------------------------- */
function summary(v1) {
  return v2 => {
    return v1 + v2;
  };
}
console.log(summary(1)(2) === 3); // true
console.log(summary(5)(-1) === 4); // true

/* --------------------------------------------------------------- */
// inBetween(a, b) – между a и b (включительно).
// arr.filter(inBetween(3,6)) – выбирает только значения между 3-6(включительно).

// inArray([...]) – находится в данном массиве.
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с
// одним из элементов массива
function inBetween(a, b) {
  return el => {
    if (el >= a && el <= b) return true;
    else return false;
  };
}

function inArray(array) {
  return el => {
    if (array.includes(el)) return true;
    else return false;
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));

/* --------------------------------------------------------------- */
// Sort by field
let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" }
];

const byField = k => {
  return (a, b) => (a[k] > b[k] ? 1 : -1);
};

console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));
