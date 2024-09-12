/**
 * @tutorial Arrays 5.4 ======================================================
 * * array is special case of object because the keys are sequential numbers.
 * * stricted ordered with fixed keys, starts with '0'.
 * * @section Creating
 * * * literal notation: '[]'
 * * * constructor: 'new Array()'
 * * @section Reference
 * * * stored by reference, like objs: '[] === [] // false'
 * * @section Looping
 * * * 'for...of' or 'for'
 * * * 'for...in' with array bad, because:
 * * * * 1. iterate through inherited props and
 * * * * 2. may do iterating not in creation order
 * * @section Converting
 * * * Boolean: 'true', like all objs
 * * * String: string of elements: '[1, true] // "1,true"'
 * * * Number:
 * * * * empty array will become '0', because '[].toString() === ""' and "" is 0
 * * * * array with num will become this num: '[1].toString() === "1"' and '1' is 1
 * * * * array with 2 nums will become 'NaN': '[1,2].toString() -> '1,2' -> 'NaN'
 */
Array.of(true, 2, 'foo'); // [true,2,'foo]
Array.of(1); // [1]

Array(1); // [1 empty item]
Array(10); // [10 empty items]
Array(1, 2); // [1, 2]
new Array(1); // [1 empty item]
new Array(10); // [10 empty items]
new Array(1, 2); // [1, 2]

Array.from('foo'); // ['f', 'o', 'o']
Array.from([2, 4, 6], v => v / 2); // [1, 2, 3]
Array.from(1); // []
Array.from({}); // []
Array.from({ a: 1 }); // []
Array.from({ length: 3 }, (_, i) => i + 1); // [1, 2, 3]

/**
 * @tutorial Array Methods 5.5 =====================================================
 * * @method push -> add items to the end, returns new length
 * * @method pop -> extract item from the end, returns elem
 * * @method unshift -> add items to the beginning, returns new length
 * * @method shift -> extract item from the end, returns elem
 * * @method splice (start, [end], ...pasteElements)
 * * * returns array of deleted elems
 * * * splice(1, 1) -> delete 1 elem
 * * * splice(0, 3, "lol", "kek") -> delete 2 elems and paste 2 new elems
 * * @method slice (start, [end])
 * * * returns new array of delete elems
 * * @method forEach
 * * * not chainable, returns nothing
 * * * iterative, non-mutable
 */

/* Tasks from 5.5 */
// Translate border-left-width to borderLeftWidth
function camelize(arr) {
	return arr
		.split("-")
		.map((e, i) => (i === 0 ? e : e.slice(0, 1).toUpperCase() + e.slice(1)))
		.join("");
}

console.log(camelize("background-color") == "backgroundColor");
console.log(camelize("list-style-image") == "listStyleImage");
console.log(camelize("-webkit-transition") == "WebkitTransition");
// Filter range
function filterRange(arr, a, b) {
	return arr.filter(e => e >= a && e <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered); // 3,1 (matching values)
console.log(arr); // 5,3,8,1 (not modified)
// Filter range "in place"
function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < a || arr[i] > b) {
			arr.splice(i, 1);
			i--;
		}
	}
}

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
console.log("arr:", arr); // [3, 1]
// Sort in decreasing order
function sort1(arr) {
	return arr1.sort((a, b) => a - b).reverse();
}

let arr1 = [5, 2, 1, -10, 8];
console.log(sort1(arr1)); // 8, 5, 2, 1, -10
// Copy and sort array
function copySorted(arr) {
	let copy = [...arr];

	return copy.sort((a, b) => a.localeCompare(b));
}

let arr2 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr2);
console.log(sorted); // CSS, HTML, JavaScript
console.log(arr2); // HTML, JavaScript, CSS (no changes)
// Map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(e => e.name);

console.log(names); // John, Pete, Mary
// Map to objects
let john1 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary3 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [john1, pete2, mary3];

let usersMapped = users1.map(e => {
	return {
		fullName: e.name + " " + e.surname,
		id: e.id
	};
});

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
// Sort users by age
let john2 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary4 = { name: "Mary", age: 28 };

let arr3 = [pete3, john2, mary4];

function sortByAge(arr) {
	return arr.sort((a, b) => a.age - b.age);
}

sortByAge(arr3);

console.log("arr3[0]", arr3[0].name); // John
console.log("arr3[1]", arr3[1].name); // Mary
console.log("arr3[2]", arr3[2].name); // Pete
// Get average age
let john3 = { name: "John", age: 25 };
let pete4 = { name: "Pete", age: 30 };
let mary5 = { name: "Mary", age: 29 };
let arr4 = [john3, pete4, mary5];

function getAverageAge(arr) {
	return arr.reduce((acc, curr) => (acc += +curr.age), 0) / arr.length;
}

console.log(getAverageAge(arr4)); // 28
// Filter unique array members
function unique(arr) {
	let result = [];

	for (let i = 0; i < arr.sort().length; i++) {
		if (arr[i] !== arr[i + 1]) {
			result.push(arr[i]);
		}
	}

	return result;
}

let strings = [
	"Hare",
	"Krishna",
	"Hare",
	"Krishna",
	"Krishna",
	"Krishna",
	"Hare",
	"Hare",
	":-O"
];

console.log(unique(strings)); // Hare, Krishna, :-O
// Create keyed object from array
let users4 = [
	{ id: "john", name: "John Smith", age: 20 },
	{ id: "ann", name: "Ann Smith", age: 24 },
	{ id: "pete", name: "Pete Peterson", age: 31 }
];

function groupById(arr) {
	let obj = {};

	console.log(arr);
	for (const el of arr) {
		obj[el.id] = el;
	}

	return obj;
}

let usersById = groupById(users4);

console.log(usersById);
