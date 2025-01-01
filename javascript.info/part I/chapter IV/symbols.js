/**
 * 4.7 Symbols ===============================================================
 * * Creating
 * * * accepts description(string or number) optional
 * * Accessing
 * * * don't autoconvert to strings, so need to convert it to get symbol
 * * * use toString()
 * * * use prop description
 * * typeof
 * * * "symbol"
 * * objects
 * * * could be properties of objects
 * * each symbol is unique
 * * skipped in for...in
 * * Object.assign copies Symbols
 *
 * Global Symbols
 * * to create global Symbol we need to access global symbol registry by using
 * * method Symbol.for(key)
 * * to get name of Symbol, use Symbol.forKey(symbol)(works only for global
 * * symbols, created with Symbol.for(key))
 */
/* Creating */
const nullSymbol = Symbol(); // Symbol()
const mySymbol = Symbol("mySymbol"); // Symbol(mySymbol)
/* Accessing */
const symbol = Symbol("description");
// Using method toString()
symbol.toString(); // Symbol(description)
// Using property descripion
symbol.description; // description
/* In objects */
const obj = {
	[symbol]: 123
};
/* Unique */
console.log(Symbol() === Symbol()); // false

const user = {
	name: "John"
};
let id = Symbol("id");
user[id] = 1;
console.log(user[id]); // 1
for (const key in user) {
	console.log("{", key, "}"); // name
}
/* Global Symbols */
let id1 = Symbol.for("id");
let idAgain1 = Symbol.for("id");
console.log(id1 === idAgain1); // true
console.log(Symbol.keyFor(id1)); // "id"
console.log(Symbol.keyFor(idAgain1)); // "id"
