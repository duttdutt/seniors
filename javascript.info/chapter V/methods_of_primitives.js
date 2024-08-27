/**
 * @tutorial Methods of primitives 5.1 ===========================================================
 * objects are heavier than primitives, because they "cost" more
 * * that's because they could create nested structures and methods
 * but we want to have methods for primitives! but we don't want them to be overloaded,
 * * so how? our primitive value still primitive value, still lightweight, but now it
 * * has methods throw boxing(object wrappers). after we get method, our object-wrapper
 * * will destroy
 * there 5 types for object-wrappers: 'String()', 'Number()', 'Boolean()', 'BigInt()', 'Symbol()'
 * * 'null' & 'undefined' have no methods(TypeError in any mode)
 * @tutorial Number 5.2
 * can use separater: '1000=1_000'
 * can use exponent: '1e3=1000', '2e5=200000', '2e-5=0.000002'
 * can't call method directly on number, like '23423.toString()' -> SyntaxError, so need
 * * to add one more dot, because js engine waits for decimal part. can use: '(23423).toString()'
 * why '0.1 + 0.2 !== 0.3', because in binary system it's will be unending number 0101011101010...
 * * so, use toFixed()
 * * @method toFixed(digits)
 * * * rounds the number to the specified number of digits after dot
 * * * returns string(!); between 0 and 100; if ommitted -> 'digits'=0
 * * @method toPrecision(digits)
 * * * add numbers aftr dot
 * * * returns string(!); between 1 and 21
 * * @method toString(base)
 * * * if 'base' ommited -> convert number to string, because default base is 10(min2-max36)
 * * * if 'base' = 2 -> convert number to binary string or other base
 * * @method isFinite(value)
 * * * value is not 'NaN', 'Infinity', '-Infinity'. convert to number type.
 * * @method Number.isFinite(value)
 * * * value is not 'NaN', 'Infinity', '-Infinity'. no converting.
 * * @method isNaN(value)
 * * * value is not 'NaN'. convert to number type.
 * * @method Number.isNaN(value)
 * * * value is not 'NaN'. no converting.
 * * @method Object.is (v1, v2)
 * * * compares two values strictly than '==='
 * * @method parseInt(value)
 * * * read number from 'value', until first non-numeric character.
 * * @method parseFloat(value)
 * * * read number from 'value', until first non-numeric character.
 * @tutorial String 5.3
 * * UTF-16
 * * can iterate over 'for...of'
 * * * @method indexOf(str, startPos)
 * * * * search 'str' in string, returns position or -1
 * * * @method lastIndexOf(str, startPos)
 * * * * search 'str' in string, returns position or -1
 * * * @method includes(str)
 * * * * search for 'str' in string, returns boolean
 * * * @method startsWith(str)
 * * * @method endsWith(str)
 * * * @method slice(start, [end])
 * * * @method substr(start, [end]) -> same as slice, but no negative + if 'end > start' -> swap
 * * * @method str1.localeCompare(str2)
 * * * * -1 if str1 < str2
 * * * * 1 if str1 > str2
 * * * * 0 if str1 === str2
 */
const testNumber = 22;
// toString(base)
console.log("testNumber.toString():", testNumber.toString()); // "22"
console.log("typeof testNumber.toString():", typeof testNumber.toString()); // "string"
console.log("testNumber.toString(2):", testNumber.toString(2)); // 101001101

// isFinite(value)
// Number.isFinite(value)
console.log("isFinite(Infinity):", isFinite(Infinity)); // false
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity)); // false
console.log("isFinite(undefined):", isFinite(null)); // null to 0 -> true
console.log("Number.isFinite(undefined):", Number.isFinite(null)); // false
console.log("isFinite('333'):", isFinite("0")); // "0" to 0 -> true
console.log("Number.isFinite('333'):", Number.isFinite("0")); // false
// isNaN(value)
// Number.isNaN(value)
console.log("isNaN(undefined):", isNaN(undefined)); // true
console.log("Number.isNaN(undefined):", Number.isNaN(undefined)); // false
console.log("isNaN('NaN'):", isNaN("NaN")); // true
console.log("Number.isNaN('NaN'):", Number.isNaN("NaN")); // false
// Object.is(v1, v2)
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true
console.log("Object.is(0, -0):", Object.is(0, -0)); // false
// parseInt(value)
// parseFloat(value)
console.log("parseInt('100px'):", parseInt("100px")); // 100
console.log("parseFloat('10.5%'):", parseFloat("10.5%")); // 10.5
// toPrecision()
const otherNum = 33.333;
console.log("otherNum.toPrecision():", otherNum.toPrecision()); // "33.333"
console.log("otherNum.toPrecision():", otherNum.toPrecision(2)); // "33"
console.log("otherNum.toPrecision():", otherNum.toPrecision(6)); // "33.3330"

/* === Tasks from  */
// Uppercase the first character
const ucFirst = str => str.at(0).toUpperCase() + str.slice(1);

console.log("ucFirst:", ucFirst("john") == "John");
// Check for spam
const checkSpam = str =>
	str.toLowerCase().includes("xxx") || str.toLowerCase().includes("viagra")
		? true
		: false;

console.log("checkSpam:", checkSpam("buy ViAgRA now") == true);
console.log("checkSpam:", checkSpam("free xxxxx") == true);
console.log("checkSpam:", checkSpam("innocent rabbit") == false);
// Truncate the text
const truncate = (str, maxlength) => {
	return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
};

console.log(
	"truncate:",
	truncate("What I'd like to tell on this topic is:", 20) ==
		"What I'd like to te…"
);
console.log("truncate:", truncate("Hi everyone!", 20) == "Hi everyone!");
