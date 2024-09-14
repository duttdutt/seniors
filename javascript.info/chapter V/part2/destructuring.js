/** Destructuring assignment
 * works with iterables: Map, Set, strings
 * defaults are may be an expressions
 * * @section Object
 * * * let { prop1, prop2 } = obj;
 * * * property name order doesn't matter
 * * * can take only what you need
 * * * can set variable with a different identifier
 * * * can set a default value for missing properties:
 * * @section Array
 * * * can set a default value
 * * * can skip an element by using commas
 * * @section Rest
 * * * must be at the end of a destructuring assignment
 * * * also can be used for the object
 * * * collects the remaining values ​​into an array and assigns it to the specified variable.
 */
// Arrays
var [a, , c] = [1, 2, 3];
var [first, second = "2"] = [ 1 ];
var [a, b, c] = "abc"; // a='a', b='b', c='c'
var [a, b] = new Set().add(1).add(2); // a=1, b=2
var [a, b] = new Map().set(0, 8).set(1, 9); // a=[0, 8], b=[1, 9]
// Objects
var { title, width } = { width: 120, title: 'Task' }
var { a } = { a:1, b:2, c:3 }
var { title: t } = { title: 'Task' }
const { title = 'Task' } = {}
// Rest
var [first, ...rest] = [1, true, false, () => {}];
var { a, ...rest } = { a:1, b:2, c: 3 }
