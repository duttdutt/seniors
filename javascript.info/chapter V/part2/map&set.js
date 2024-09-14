/** 5.7 Map ------------------------------------------------------------------
 * allows keys of any type
 * new Map() - creates Map
 * @section Methods
 * * '.set(key, value)' - adds new element. element exists -> update.
 * * * returns Map, so could chain
 * * '.size' - returns number of elements in Map
 * * '.clear()' - removes everything
 * * '.delete(key)' - removes element by key
 * * '.get(key)' - returns element's value by key
 * * '.has(key)' - returns 'true' if key exists, otherwise 'false'
 * * '.forEach((value, key, map) => {})' - returns undefined
 * @section Iteration
 * * 'for...of'
 * * ordered in creation order
 * * 'Map.keys()' - returns iterable
 * * 'Map.values()' - returns iterable
 * * 'Map.entries()' - returns iterable. for entries '[key, value]'. default
 * * * in 'for...of'
 * @section Map and Object
 * * 'Object.entries(Map)' - Map from Object
 * * 'Object.fromEntries(Object)' - Object from Map
 */
const map = new Map();
map[3] = 3; // treating map like object, so keys only strings/Symbols
map.clear();
const objTest = { a: 1, b: 2 };
map.set(objTest, objTest);

/** 5.7 Set ------------------------------------------------------------------
 * only unique values
 * @section Methods
 * * 'set.add(value)' - adds new value. value exists -> update.
 * * * returns Set, so chainable
 * * 'set.clear()' - clear Set
 * * 'set.delete(value)' - delete value
 * * 'set.size' - returns number of values in Set
 * * 'set.has(value)' - returns 'true', if value exists, otherwise 'false'
 * @section Iteration
 * * 'for...of'
 */

/* Tasks */
// Filter unique array members
function unique(arr) {
	return Array.from(new Set(arr));
}
let values = [
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
console.log(unique(values)); // Hare, Krishna, :-O
// Filter anagrams
function aclean(arr) {
	const set = new Set();
	for (const word of arr) {
		const sorted = word.toLowerCase().split("").sort().join("");
		set.add(sorted);
	}

	return set;
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

const newSet = new Set();
newSet.add(1);
for (const value of newSet.values()) {
	console.log(value);
}
