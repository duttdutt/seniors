/** 4.2 Objects merging and copying
 * Copying
 * * object copied -> reference copied -> but object itself isn't duplicated.
 * Cloning
 * * Shallow copy
 * * * for...in
 * * * * for (const key in main) { clone[key] = main[key] } // clone === main is true
 * * * * will have same reference on object
 * * * Object.assign(targetObj, otherObjs)
 * * * * if copied name exists -> overwrite it
 * * * * will have same reference on object
 * * Nested cloning
 * * * structuredClone(obj)
 * * * * can't copy methods
 * * * JSON.parse(JSON.stringify(obj)) -> good
 * * * * functions, symbols, undefined -> null
 * * * lodash _.cloneDeep(obj) -> good
 */
// Same objects
const obj1 = {};
const obj2 = obj1;
obj1 === obj2; // true
// Different objects
const obj3 = {};
const obj4 = {};
obj3 === obj4; // false

/* Clonning */
const mainObject = {
	a: 1,
	b: 2,
	c: {
		d: 3,
		e: 4,
		f: () => {}
	},
	arr: [1, 2, 3]
};
/* Clonning: shallow copy */
// for...in
console.log("===for...in===");
const cloneForinObject = {};

for (const key in mainObject) {
	cloneForinObject[key] = mainObject[key];
}
console.log(cloneForinObject === mainObject); // false, different!
console.log(cloneForinObject.c === mainObject.c); // true, not copied nested object
console.log(cloneForinObject.arr === mainObject.arr); // true, not copied nested array
// Object.assign
console.log("===Object.assign===");
const cloneAssignObject = {};

Object.assign(cloneAssignObject, mainObject);
console.log(cloneAssignObject === mainObject); // false, different!
console.log(cloneAssignObject.c === mainObject.c); // true, not copied nested object
console.log(cloneAssignObject.arr === mainObject.arr); // true, not copied nested array

/* Clonning: nested copy */
// structuredClone
console.log("===structuredClone===");
delete mainObject.c.f; // exception with methods
const cloneStructuredcloneObject = structuredClone(mainObject);

console.log(cloneStructuredcloneObject === mainObject); // false, different!
console.log(cloneStructuredcloneObject.c === mainObject.c); // false, different!
console.log(cloneStructuredcloneObject.arr === mainObject.arr); // false, different!
// Lodash
mainObject.c.f = () => {};
// console.log("===lodash===");
// import _ from "lodash";
// const cloneLodashObject = _.cloneDeep(mainObject);
// console.log(cloneLodashObject === mainObject); // false, different!
// console.log(cloneLodashObject.c === mainObject.c); // false, different!
// console.log(cloneLodashObject.arr === mainObject.arr); // false, different!
// JSON.parse(JSON.stringify())
console.log("===JSON===");
const cloneJSONObject = JSON.parse(JSON.stringify(mainObject));
console.log(cloneJSONObject === mainObject); // false, different!
console.log(cloneJSONObject.c === mainObject.c); // false, different!
console.log(cloneJSONObject.arr === mainObject.arr); // false, different!
// null
let objJson = {
	a: undefined,
	foo() {}
};
let newSymbol = Symbol("test");
objJson[newSymbol];

const json = JSON.parse(JSON.stringify(objJson));
console.log(json); // {}

/* for...in with arrays */
// iterate through inherited props
const someArr = [1, 2, 3];
someArr.newProp = "test";
for (const key in someArr) {
	console.log("value:", someArr[key]); // 1, 2, 3, "test"
}
