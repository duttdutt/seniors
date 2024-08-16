/** 2.7 Type Conversions =====================================================
 * Types of converting values:
 * @tutorial conversion(explicit)
 * * toString(), String(), Number(), Boolean(), Array.from(), Object()
 * @tutorial coercion(implicit/automatic)
 * * concatenation, interpolation, unary plus, multiplying by 1, !, ternary
 */
console.log(Number("")); // 0
console.log(Number("\n  \t 234251234e3")); // 234251234000
console.log(Number("\n  \t 234251234p3")); // NaN

/** 2.8 Basic operators, maths ===============================================
 * @tutorial Remainder (%)
 * * result of a%b is the remainder of a/b
 * @tutorial Exponentiation (**)
 * * 2**3 8
 * * can replace Math.pow(x,y)
 * @tutorial Concatenation
 * * if any of operands is string -> other is converted to string
 * @tutorial Increment/Decrement
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
 * @tutorial String comparison
 * * Compared letter-by-letter, but using Unicode
 * * lowercase > UPPERCASE
 * @tutorial Equality
 * * ==(loose), ===(strict), Object.is()
 * * @section ==
 * * * never use ==, because using implicit coercion
 * * @section ===
 * * * use ===, because not using implicit coercion
 * * * diff types -> unequal
 * * * same types && same value -> equal
 * * * used in switch, indexOf()
 * * @section Object.is(v1, v2)
 * * * determines whether two values are the same value
 * * * returns boo
 * * * * difference between ===:
 * * * * * Object.is(NaN, NaN); // true
 * * * * * Object.is(+0, -0); // false
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
 * @tutorial ||
 * * OR  finds first true, otherwise last false
 * @tutorial &&
 * * AND finds first false, otherwise last true
 * @tutorial
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
 * @tutorial ??
 * * value, that are not null or undefined
 * * if both not null|undefined or both null|undefined -> select last value
 */
console.log("text" ?? undefined); // "text"
console.log(null ?? "text"); // "text"
console.log("first" ?? "second"); // "second"
console.log(null ?? undefined); // undefined
console.log(undefined ?? null); // null

/** 2.12 Loops: while && for =================================================
 * @tutorial while
 * * while (condition) { loop body };
 * * while condition is true -> executing
 * * condition is checked before executing loop body
 * @tutorial do...while
 * * do { loop body } while (condition);
 * * while condition is true -> executing
 * * condition is checked after executing loop body
 * * the code will execute, at least, once
 * @tutorial for
 * * for (start; condition; step) { loop body };
 * * * start - executed once upon entering the loop;
 * * * condition - checked before each iteration;
 * * * step - executed after the loop body before checking the condition;
 * * * body - executed repeatedly, until the condition becomes |true|.
 *
 * @tutorial break
 * * terminates the loop
 * @tutorial continue
 * * jump to next iteration
 */

/** 2.13 The switch statement =================================================
 * @tutorial switch
 * * can replace multiple if statements
 * * check using strict equality (cannot use NaN)
 * * default is optional
 * * no break -> execution continues
 * * switch's argument and any case could be an expression
 * * cases could be grouped, that's because they don't have break keyword
 */
/* eslint-disable no-fallthrough */
/* eslint-disable no-unreachable */
/* strict equality */
switch (NaN) {
	case NaN: // Will not work
}
/* expressions in argument and case */
let switchTest = [1];
switch (typeof switchTest.includes(1).toString()) {
	// will work
	case "string":
		true;
		break;
}
switch ("string") {
	// will work
	case typeof switchTest.includes(1).toString():
		true;
		break;
}
/* grouping */
switch (1) {
	// will work for arguments 1, 2, 3
	case 1:
	case 2:
	case 3:
		true;
		break;
}
/* no execution after break */
switch (1) {
	case 1:
		break;
		console.log(1); // not execute
}
/* no matter where is default if switch gets case */
switch (1) {
	default:
		console.log("default");
		break;
	case 1:
		console.log(1);
		break;
	// 1
}
/* no matter where is default if switch gets default(break stops all other cases) */
switch (0) {
	default:
		console.log("default");
		break;
	case 1:
		console.log(1);
		break;
	// 0
}
/* get default case, default doesn't have break, after it goes case? execute this case/cases */
switch (0) {
	default:
		console.log("default");
	case 1:
		console.log(1);
		break;
	// default 1
}
/* not get default case, default doesn't have break, after it goes case? execute only case */
switch (1) {
	default:
		console.log("default");
	case 1:
		console.log(1);
		break; // without -> 1 too
	// 1
}
/* case 2(executed), no break -> execute next, while u will not get break */
switch (2) {
	case 2:
		console.log(2); // 2 and no break -> next is default
	default:
		console.log("default");
		break;
	case 1:
		console.log(1);
		break;
	// 2 "default"
}

/* Tasks from 2.10 */
// Rewrite the "switch" into an "if"
const browser = "Edge";
if (browser === "Edge") {
	console.log("You've got the Edge!");
} else if (
	browser === "Chrome" ||
	browser === "Firefox" ||
	browser === "Safari" ||
	browser === "Opera"
) {
	console.log("Okay we support these browsers too");
} else {
	console.log("We hope that this page looks ok!");
}
// Rewrite "if" into "switch"
const a1 = 2;
switch (a) {
	case 0:
		console.log("0");
		break;
	case 1:
		console.log("1");
		break;
	case 2:
	case 3:
		console.log("2, 3");
		break;
}

/** 2.15 Functions =================================================
 * @tutorial function
 * * similar action in many places without repetition
 * * @section local variables
 * * * variables, declared inside function is only visible inside this function
 * * @section outer variables
 * * * variables, declared outer function can be accessed
 * * @section local + outer
 * * * local variable has similar identifier? use local variable, because
 * * * it shadows outer variable
 * * @section arguments
 * * argument not provided -> undefined
 * * argument not provided -> may use default
 * * default uses strict equality with undefined
 * * default can be an expression
 * * @section return
 * * * returning value back
 * * * can be placed in any place, but code above is ignored
 * * @section tips
 * * * one function - one action
 * * * need to be short
 * * * need do exactly one thing
 * * @section typeof
 * * * typeof any function is "function"
 */
/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
/* local variables */
function foo(parameter) {
	let variable = 234234;
	console.log(variable); // get
	console.log(parameter); // get
}
console.log(variable); // undefined
console.log(parameter); // undefined
foo(argument);
/* outer variables */
let variable1 = 234234;
function bar() {
	console.log(variable1); // get
	variable1 = true;
}
console.log(variable1); // 234234
bar(); // function call
console.log(variable1); // true
/* local + outer */
let variable2 = 234234;
function baz() {
	let variable2 = true;
	console.log(variable2); // true
}
console.log(variable2); // 234234
/* argument */
// argument not provided
function foo(p1, p2) {
	return `${p1} and ${p2}`;
}
foo(1); // "1 and undefined"
// default
function foo(p1, p2 = 2) {
	return `${p1} and ${p2}`;
}
foo(1); // "1 and 2"
// default uses strict equality
function foo(p1, p2 = 2) {
	return `${p1} and ${p2}`;
}
foo(1, undefined); // "1 and 2"
// default could be an expression
function bar() {
	return 2;
}
function foo(p1, p2 = bar()) {
	return `${p1} and ${p2}`;
}
foo(1); // "1 and 2"
// typeof function
function typeofCheck() {
	return 1;
}
console.log(typeof typeofCheck); // "function"
console.log(typeof typeofCheck()); // "number"
console.log(typeofCheck); // [Function: typeofCheck]
console.log(typeofCheck()); // 1

/* Tasks from 2.15 */
// Rewrite the function using '?' or '||'
function checkAge(age) {
	return age > 18 ? true : "stop";
}
function checkAge(age) {
	return age > 18 || "stop";
}
// Function min(a, b)
function min(a, b) {
	return a > b ? b : a;
}
// Function pow(x, y)
function pow(x, y) {
	let count = y;
	let result = 0;

	do {
		result += x * x;
		count--;
	} while (count > 0);

	return result;
}

/** 2.16 Functions Expressions =================================================
 * @tutorial FunctionExpressions
 * * no name in function expression
 * * @section Function Declaration vs Function Expression
 * * * FD is statement, FE is created inside an expression
 * * * FD can be invoked earlier than declaration, FE can be used only after declaration
 * * * FD in strict mode only visible in their block or inner. outside not.
 * * @section callback
 * * * functions, that can be called back
 * * @section anonymous
 * * * functions without name
 */
/* eslint-disable no-constant-condition */
/* declarations in strict mode */
("use strict");
p(); // ReferenceError: a is not defined
if (1) {
	function p() {}
	p(); // Good
	{
		p(); // Good
	}
}
p(); // ReferenceError: a is not defined
