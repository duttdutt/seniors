/* Objects */
/** 4.1 Objects ==============================================================
 * Unordered
 * * because of num props("0")
 * * * solution: create from num props strin props -> "0" "+0", "1", "_1"
 * * other props in creation order
 * const
 * * can be modified, because we modify an object, not referenced value
 * Creating
 * * object literal {}
 * * object constructor new Object({})
 * Props
 * * key: value(0 -> "0")
 * * key - string and Symbols
 * * value - any
 * * could be reservedwords, like for, let, function
 * Accessing
 * * dot notation obj.a
 * * square notation obj[a]
 * * * multiword props
 * * * * "likes birds" -> obj["likes birds"]
 * * * * expressions(let a = "p" + "Q" -> obj[a] -> obj.pQ)
 * * * * computed props(let a prompt("Time?") -> obj[a] -> obj.prompt answer)
 * Deleting
 * * delete operator
 * * returns boolean
 * * in arrays <* empty items>
 * Checking for prop
 * * in operator
 * * a in obj; // returns boo
 * Looping
 * * for (const key in obj) { obj[key]; }
 */

/* Tasks from 4.1 */
// Hello, object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
// Check for emptiness
function isEmpty(obj) {
	for (const key in obj) {
		return false;
	}
	return true;
}
// Sum object properties
let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
};
let result = 0;
for (const key in salaries) {
	result += salaries[key];
}
console.log(result);
// Multiply numeric property values by 2
// before the call
let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};
function multiplyNumeric(obj) {
	for (const key in obj) {
		if (typeof obj[key] === "number") {
			obj[key] *= 2;
		}
	}
}
multiplyNumeric(menu);
console.log(menu);

/** 4.5 new ==================================================================
 * constructor functions
 * * capital letter first
 * * can omit parenthesis
 * * executed only with new
 * * 1. created new object
 * * 2. execute function body
 * * 3. returns this
 * test for constructor new.target
 * * without new -> undefined
 * * with new -> function string
 * return
 * * if returns new object -> created new object
 * * if returns primitive -> ignored
 */

/* Tasks from 4.4 */
// Two functions – one object
const obj = {};
function A() {
	return obj;
}
function B() {
	return obj;
}
console.log(new A() === new B()); // true
// Create new Calculator
function Calculator() {
	this.read = function (a, b) {
		this.a = a;
		this.b = b;
	};

	this.sum = function () {
		return this.a + this.b;
	};

	this.mul = function () {
		return this.a * this.b;
	};
}
const calculator = new Calculator();
calculator.read(3, 5);

console.log("Sum=" + calculator.sum()); // 8
console.log("Mul=" + calculator.mul()); // 15
// Create new Accumulator
function Accumulator(startingValue) {
	this.currentValue = startingValue;

	this.read = function (value) {
		this.currentValue += value;
	};
}
let accumulator = new Accumulator(100); // initial value 1

accumulator.read(10); // adds the user-entered value
accumulator.read(100); // adds the user-entered value

console.log(accumulator.currentValue); // 210

/**
 * 4.6 Optional chaining =========================================================
 * * Syntax:
 * * * object.property?.property
 * * * object.property?.[expression]
 * * * object.method?.(arguments)
 * * trying to access object's property or calls method, and if they doesn't
 * * exist, evaluates to undefined instead of throwing an error
 * * * cannot be used on a non-declared root object:
 * * * * undeclaredVariable?.property; // ReferenceError: not defined
 * * * can be used to call a method, which may not exist(API with unavailable
 * * * method/feature isn't available on user's device):
 * * * * const result = someInterface.customMethod?.(args);
 * * * can be used with computed properties
 * * * can be used with arrays
 * * * can be used with nullish coalescing operator
 */
/* Computed props */
const obj1 = { propName: 3 };
const nestedProp = obj1?.["prop" + "Name"];
console.log(nestedProp); // 3
/* Arrays */
const arr = [1, 2, 3, 4];
function printMagicIndex(arr) {
	return arr?.[2];
}
console.log(printMagicIndex(arr)); // 3
/* Nullish operator */
const customer = {};
const customerCity = customer?.city ?? "Unknown city";
console.log(customerCity); // "Unknown city"
