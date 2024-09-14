/** 'Object.keys()', 'Object.values()', 'Object.entries()' 5.9 ===============
 * static methods
 * supported by plain objects
 * @method Object.keys(obj)
 * * @returns real array of keys
 * @method Object.values(obj)
 * * @returns real array of values
 * @method Object.entries(obj)
 * * @returns real array of [ keys, value ] pairs
 * this methods ignores Symbol props
 * @method Object.getOwnPropertySymbols
 * @method Reflect.ownKeys(obj)
 *
 * @section Object on primitives
 * 'null' & 'undefined' -> TypeError
 * strings
 * other primitives returns empty array
 */
const obj = {
	a: 1,
	b: 2,
	c: 3
};

let result = { a: 1, b: true, c: () => {} };
for (const key of Object.keys(obj)) {
	console.log("key:", key);
}
console.log("result:", result); // 0,1,2

let result2 = { a: 1, b: true, c: () => {} };
for (const value of Object.values(obj)) {
	console.log("value:", value);
}
console.log("result2:", result2); // 1,2,3

let result3 = { a: 1, b: true, c: () => {} };
for (const entry of Object.entries(obj)) {
	console.log("entry:", entry);
}
console.log("result3:", result3); // 1,2,3

console.log("==============================================================");
const objForTransformating = {
	firstValue: 32342,
	secondValue: true,
	thirdValue: "kek",
	fourthValue() {
		return this.firstValue + 1000;
	}
};
const arrayFromObjForTransformating = Object.entries(objForTransformating);
const newObjFromTransformatedArray = arrayFromObjForTransformating
	.flat()
	.filter(element => typeof element !== "string");
console.log(newObjFromTransformatedArray);

/* Tasks from LearnJS */
// Sum the properties
const salaries = {
	John: 100,
	Pete: 300,
	Mary: 250
};

function sumSalaries(object) {
	let result = 0;

	for (const value of Object.values(salaries)) {
		result += value;
	}

	return result;
}

console.log(sumSalaries(salaries));
// Count properties
let user = {
	name: "John",
	age: 30,
	isMarried: true
};

function count(object) {
	let count = 0;

	/* 1st */
	// for (const key of Object.keys(object)) {
	// 	count++;
	// }
	/* 2nd */
	// for (const prop in object) {
	// 	count++;
	// }
	/* 3rd */
	// return Object.entries(object).length - 1;

	return count;
}

console.log(count(user));
console.log("==============================================================");
/* ======================================================================= */
/* =============================Personal Code============================= */
/* ======================================================================= */
const obj1 = { 0: 1, 1: 2, 2: 3 };
const arr1 = [1, 2, 3];
console.log(Object.keys(obj1)); // [ '0', '1', '2' ]
console.log(Object.keys(arr1)); // [ '0', '1', '2' ]
console.log(Object.values(obj1)); // [ 1, 2, 3 ]
console.log(Object.values(arr1)); // [ 1, 2, 3 ]
console.log(Object.entries(obj1)); // [ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ] ]
console.log(Object.entries(arr1)); // [ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ] ]

console.log(Object.keys(23423)); // []
console.log(Object.values(Infinity)); // []
console.log(Object.entries(NaN)); // []
console.log(Object.keys(true)); // []
console.log(Object.values(true)); // []
console.log(Object.entries(true)); // []
console.log(Object.keys(Symbol("description"))); // []
console.log(Object.values(Symbol("description"))); // []
console.log(Object.entries(Symbol("description"))); // []
// console.log(Object.keys(null)); // TypeError, cannot convert to object
// console.log(Object.entries(undefined)); // TypeError, cannot convert to object
console.log(Object.keys("string")); // ['0', '1', '2'...]
console.log(Object.values("string")); // ['s', 't', 'r'...]
console.log(Object.entries("string")); // [['0', 's'], ['1', 't'], ['2', 'r'], ...]

console.log("==============================================================");
// method pick(obj, ...keys)
const pickMethod = {
	firstValue: 32342,
	secondValue: true,
	thirdValue: "kek",
	fourthValue() {
		return this.firstValue + 1000;
	}
};

function pick(obj, ...keys) {
	const filteredObject = Object.entries(obj).filter(([key, _value]) =>
		keys.includes(key)
	);

	return Object.fromEntries(filteredObject);
}

console.log("pick():", pick(pickMethod, "thirdValue", "firstValue"));

// invert(obj)
const invertMethod = {
	a: 1,
	b: 2,
	c: 3
};

function invert(obj) {
	const invertedObject = Object.entries(obj).reverse();

	return Object.fromEntries(invertedObject);
}

console.log("invert():", invert(invertMethod));
