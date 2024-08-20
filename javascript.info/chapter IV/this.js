/* THIS
 * this is binding, that is made when a function is invoked and what it
 * references we could know only where is function is called
 *
 * no matter where function is declared
 * MATTERS ONLY WHERE IT'S INVOKED(CONTEXT)
 *
 * function is invoked -> execution context id created
 *
 * execution context contains info about:
 * where function is called, how, parameters + this reference
 */
function baz() {
	// call-stack: baz()
	// our call-stack in global scope
	console.log("baz");
	bar(); // call-site for bar
}
function bar() {
	// call-stack: baz() -> bar()
	// our call-stack in baz()
	console.log("bar");
	foo(); // call-site for foo
}
function foo() {
	// call-stack: baz() -> bar() -> foo()
	// our call-stack in bar()
	console.log("foo");
}
baz();

/** Default Binding ==========================================================
 * standalone function invocation
 */
/** Implicit Binding =========================================================
 * context is an object
 */
function fooMethod() {
	console.log(this.a);
}
let obj = { a: 1, fooMethod };
obj.fooMethod(); // 1
// Only the top/last level of an object property reference chain matters to the call-site
let obj1 = { a: 3, obj };
obj1.obj.fooMethod(); // also 1
/** Implicity lost
 *
 */
function fooLost() {
	console.log(this.a);
}
let objLost = {
	a: 2,
	fooLost
};
const objLost2 = obj.foo; // reference! this is lost
objLost2(); // TypeError

/* Other */
/* Access to this we could in any mode in global scope:
in use strict: global object, in sloppy mode: global object */
// console.log("first this:", this); // global object

// /* Access to global object props: we could with var, but cannot wih let/const
// strict mode no matter */
// var someProp = 0;
// console.log("this.someProp", this.someProp); // 0, only in BrowserAPI, in Node -> undefined
// const otherProp = 0;
// console.log("this.otherProp:", this.otherProp); // undefined

// /* Access from function */
// function strictMode() {
// 	"use strict";
// 	console.log("function with strict mode:", this);
// }
// strictMode(); // undefined, so cannot access to any props
// function nonStrictMode() {
// 	console.log("function without strict mode:", this); // global object
// }
// nonStrictMode(); // undefined, so can access to any props*/
// const a = 0;
// function defaultBind() {
// 	return this.a;
// }
// defaultBind(); // call-site in global scope -> search prop a in global scope
