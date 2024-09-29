// Global Object in Node.js
console.log(globalThis); // Global Object
console.log(this); // Global Object
console.log(global); // Global Object
// console.log(window); // Not working in Node.js, only BrowserAPI

// Global variables
console.log(globalThis.Number.POSITIVE_INFINITY === Number.POSITIVE_INFINITY); // true
globalThis.parseInt();
parseInt();

globalThis.f = function() { return 1 }
console.log(globalThis.f()); // 1
console.log(f()); // 1

// Nested functions, any level
function b() {
    return () => {
        return () => {
            return () => {
                return () => {
                    return globalThis.f();
                }
            }
        }
    }
}
console.log(b()()()()()); // 1

// Check for environment
if (typeof window !== "undefined") {
  console.log("Browser Environment");
} else {
  console.log("Node Environment");
}
