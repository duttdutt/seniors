/** 5.8 WeakMap --------------------------------------------------------------
 *
 */
const obj = {
	title: "test",
	isMe: false,
	age: 3234
};

const arr = [1, 2, true, () => {}];

const { title, ...restObj } = obj;
console.log("title:", title); // "test"
console.log("...restObj:", restObj); // { isMe: false, age: 3234 }

const [one, ...restArr] = arr;
console.log("one:", one);
console.log("...restArr:", restArr);
