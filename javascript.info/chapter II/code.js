/** 2.7 Type Conversions
 * Types of converting values:
 * @type conversion(explicit)
 * * toString(), String(), Number(), Boolean(), Array.from(), Object()
 * @type coercion(implicit/automatic)
 * * concatenation, interpolation, unary plus, multiplying by 1, !, ternary
*/
console.log(Number('')); // 0
console.log(Number('\n  \t 234251234e3')); // 234251234000
console.log(Number('\n  \t 234251234p3')); // NaN