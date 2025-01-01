/* ======================================================================== */
/* Как сделать, чтобы объект был равен определенному числу? */
const obj1 = {
	[Symbol.toPrimitive]() {
		return 333;
	},
	toString() {
		return 333;
	},
	valueOf() {
		return 333;
	}
};
const num1 = 333;
console.log(num1 == obj1);
/* ======================================================================== */
/* Как сделать, чтобы объект был равен определенной строке? */
const obj2 = {
	[Symbol.toPrimitive]() {
		return "test";
	},
	toString() {
		return "test";
	},
	valueOf() {
		return "test";
	}
};
const str1 = "test";
console.log(str1 == obj2);
/* ======================================================================== */
/* Как это сделать? */
// obj > 0 // true
const obj3 = {
	[Symbol.toPrimitive]() {
		return 1;
	}
};
console.log(obj3 > 0); // true
/* ======================================================================== */
/* Как это сделать? */
// String(obj < 0) + String(obj < 0) // "truefalse"
const obj4 = {
	count: 0,
	[Symbol.toPrimitive](hint) {
		if (hint === "number" && this.count === 0) {
			this.count += 1;
			return -1;
		} else {
			return 1;
		}
	}
};
console.log(String(obj4 < 0) + String(obj4 < 0)); // "truefalse"
