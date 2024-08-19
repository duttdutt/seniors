/** 4.8 Objects to primitive =================================================
 * Object-to-string
 * * objects -> "[object Object]"
 * * arrays -> string of elements
 * * * check for [Symbol.toPrimitive]("string"), if no, then:
 * * * 1. {}.toString() returns "[object Object]"
 * * * 2. String("[object Object]") returns "[object Object]"
 * Object-to-number
 * * plain objects to NaN
 * * arrays with any string character -> NaN
 * * arrays with only nums -> string of nums
 * * emptry array -> 0
 * * * check for [Symbol.toPrimitive]("number"), if no, then:
 * * * 1. {}.valueOf() returns {}
 * * * 2. {}.toString() returns "[object Object]"
 * * * 3. Number("[object Object]") returns NaN
 * Object-to-boolean
 * * always converts objects to true
 * Symbol.toPrimitive(hint)
 * * hints may be "default"(not sure binary +), "string"(to string), "number"(math)
 * * may return only primitive, otherwise typerror exception
 * *
 */
// object-to-string
console.log(String({})); // "object Object"
console.log(String([])); // ''
console.log(String([99])); // '99'
console.log(String([99, true])); // '99,true'
// object-to-boolean
console.log(Boolean({})); // true
console.log(Boolean({ a: 1 })); // true
console.log(Boolean([])); // true
console.log(Boolean([2, false])); // true
console.log(Boolean(() => {})); // true
// object-to-number
console.log(Number({})); // NaN
console.log(Number({ a: 1, b: 2 })); // NaN
console.log(Number([])); // 0
console.log(Number([99])); // 99
console.log(Number([99, true])); // NaN
// [Symbol.toPrimitive](hint)
let someObj = {
	name: "John",
	[Symbol.toPrimitive](hint) {
		if (hint === "number") return 1;
		return 2;
	}
};

console.log(String(someObj)); // 2
console.log(Number(someObj)); // 1

const obj = { name: "Anna" };
obj[Symbol.toPrimitive] = hint => {
	if (hint === "number") return {};
	return 2;
};
// console.log(+obj); // TypeError: Cannot convert object to primitive value
console.log(`${obj}`); // 2

const newObj = {
	toString() {
		return "hello";
	},
	valueOf() {
		return 23423;
	}
};
console.log(newObj.toString()); // "hello"
console.log(+newObj); // 23423
