/* Objects */
/** Objects ==================================================================
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
