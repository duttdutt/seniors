/** 2.7 Type Conversions
 * Types of converting values:
 * @type conversion(explicit)
 * * toString(), String(), Number(), Boolean(), Array.from(), Object()
 * @type coercion(implicit/automatic)
 * * concatenation, interpolation, unary plus, multiplying by 1, !, ternary
 */
console.log(Number("")); // 0
console.log(Number("\n  \t 234251234e3")); // 234251234000
console.log(Number("\n  \t 234251234p3")); // NaN

/** 2.8 Basic operators, maths
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
