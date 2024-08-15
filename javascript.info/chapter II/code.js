/** 2.7 Type Conversions =====================================================
 * Types of converting values:
 * @paragraph conversion(explicit)
 * * toString(), String(), Number(), Boolean(), Array.from(), Object()
 * @paragraph coercion(implicit/automatic)
 * * concatenation, interpolation, unary plus, multiplying by 1, !, ternary
 */
console.log(Number("")); // 0
console.log(Number("\n  \t 234251234e3")); // 234251234000
console.log(Number("\n  \t 234251234p3")); // NaN

/** 2.8 Basic operators, maths ===============================================
 * @paragraph Remainder %
 * * result of a%b is the remainder of a/b
 * @paragraph Exponentiation **
 * * 2**3 8
 * * can replace Math.pow(x,y)
 * @paragraph Concatenation
 * * if any of operands is string -> other is converted to string
 * @paragraph Increment/Decrement
 * * prefix returns new value
 * * postfix returns old value
 */
console.log(3 + 3 + 3 + 3 + 3 + 3 + "1"); // '181'
console.log("1" + 3 + 3 + 3 + 3 + 3 + 3); // '13333333'
console.log(3 + 3 + 3 + "1" + 3 + 3 + 3); // '91333'
console.log(+true); // 1
console.log(+"asdf"); // NaN

/* Tasks from 2.8 */
/* The postfix and prefix forms: */
let a = 1,
	b = 1;
let c = ++a; // 2
let d = b++; // 1
/* Assignment result: */
// What are the values of y and x after the code below?
let y = 2;
let x = 1 + (y *= 2); // x=5 y=4
/* Type Conversions: */
"" + 1 + 0; // "10"
"" - 1 + 0; // -1
true + false; // 1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // "9px"
"$" + 4 + 5; // "$45"
"4" - 2; // 2
"4px" - 2; // NaN
"  -9  " + 5; // "   -9    5"
"  -9  " - 5; // -14
null + 1; // 1
undefined + 1; // NaN
" \t \n" - 2; // -2

/** 2.9 Comparisons ==========================================================
 * @paragraph String comparison
 * * Compared letter-by-letter, but using Unicode
 * * lowercase > UPPERCASE
 * @paragraph Equality
 * * ==(loose), ===(strict), Object.is()
 * * @section ==
 * * * never use ==, because using implicit coercion
 * * @section ===
 * * * use ===, because not using implicit coercion
 * * * diff types -> unequal
 * * * same types && same value -> equal
 * * * used in switch, indexOf()
 * * @section Object.is(v1, v2)
 */
console.log(-0 === +0); // true
console.log(0.3 === 0.2 + 0.1); // false, floating-point problem
console.log(Infinity === Infinity); // true
console.log(NaN === NaN); // false
console.log(null === undefined); // false, compared types
console.log(3 === "3"); // false
console.log([NaN].indexOf(NaN)); // -1(not finded)
switch (NaN) {
	case NaN:
		console.log("test");
}
// ==
console.log(null == undefined); // true, just true
console.log("0" == 0); // true

/* Tasks from 2.9 */
5 > 4; // true
"apple" > "pineapple"; // false
"2" > "12"; // true
undefined == null; // true
undefined === null; // false
null == "\n0\n"; // false
null === +"\n0\n"; // false

/* Tasks from 2.10 */
/* Rewrite to ?: */
let result;
// if (a + b < 4) {
// 	result = "Below";
// } else {
// 	result = "Over";
// }
a + b < 4 ? (result = "Below") : (result = "Over");
/* Rewrite to ?: */
let message, login;
// if (login == "Employee") {
// 	message = "Hello";
// } else if (login == "Director") {
// 	message = "Greetings";
// } else if (login == "") {
// 	message = "No login";
// } else {
// 	message = "";
// }
message =
	login == "Employee"
		? "Hello"
		: login == "Director"
			? "Greetings"
			: login == ""
				? "No login"
				: "";

/** 2.10 Logical operators ===================================================
 * precedence: && > ||
 * @paragraph ||
 * * OR  finds first true, otherwise last false
 * @paragraph &&
 * * AND finds first false, otherwise last true
 * @paragraph
 * * a &&= b -> a === false ? a=b : a=a;
 * * a ||= b -> a === true ? a=b : a=a;
 */

/* Tasks from 2.10 */
console.log(null || 2 || undefined); // 2
console.log(console.log(1) || 2 || console.log(3)); // log 1; 2
console.log(1 && null && 2); // null
console.log(console.log(1) && console.log(2)); // log 1; undefined
console.log(null || (2 && 3) || 4); // 3

/** 2.11 Nullish coalescing operator =========================================
 * @paragraph ??
 * * value, that are not null or undefined
 * * if both not null|undefined or both null|undefined -> select last value
 */
console.log("text" ?? undefined); // "text"
console.log(null ?? "text"); // "text"
console.log("first" ?? "second"); // "second"
console.log(null ?? undefined); // undefined
console.log(undefined ?? null); // null

/** 2.12 Loops: while && for =================================================
 * @paragraph while
 * * while (condition) { loop body };
 * * while condition is true -> executing
 * * condition is checked before executing loop body
 * @paragraph do...while
 * * do { loop body } while (condition);
 * * while condition is true -> executing
 * * condition is checked after executing loop body
 * * the code will execute, at least, once
 * @paragraph for
 * * for (start; condition; step) { loop body };
 * * * start - executed once upon entering the loop;
 * * * condition - checked before each iteration;
 * * * step - executed after the loop body before checking the condition;
 * * * body - executed repeatedly, until the condition becomes |true|.
 *
 * @paragraph break
 * * terminates the loop
 * @paragraph continue
 * * jump to next iteration
 */
