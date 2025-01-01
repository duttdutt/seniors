/** Iterables 5.6 =========================================================================================
 * use object in for...of loop
 * arrays and strings are iterable by default
 * * @section how?
 * * add to object method '[Symbol.iterator]'
 * * must return iterator(object with method 'next')
 * * method next must return object with props '{done: Boolean, value: any}'
 * * * if done: true -> stop iteration, otherwise value is next
 * * @section array-like
 * * array-likes are with length and can use for...of
 * * @method Array.from(value)
 * * * from iterable or array-like to real array
 */

let obj = {
	firstValue: 1,
	secondValue: 5,
	[Symbol.iterator]: function () {
		return {
			next() {
				if (obj.secondValue > obj.firstValue)
					return { done: false, value: obj.firstValue++ };
				return { done: true };
			}
		};
	}
};
obj.length = 5;

console.log(Array.from(obj, el => el + 1));

// Arrays are iterable
const iterable = ["a", "b", "c"];
const iterator = iterable[Symbol.iterator]();
console.log(iterator.next()); // { value: 'a', done: false }
console.log(iterator.next()); // { value: 'b', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

function logAll(iterable) {
	const iterator = iterable[Symbol.iterator]();

	while (true) {
		const { value, done } = iterator.next();

		if (done) break;

		console.log(value);
	}
}

logAll(iterable);

//
const object = {
	[Symbol.iterator]() {
		let step = 0;
		const iterator = {
			next() {
				if (step < 3) step++;

				switch (step) {
					case 1:
						console.log(`HI:${step}`);
						return { value: "hello", done: false };
					case 2:
						console.log(`HI:${step}`);
						return { value: "world", done: false };
					default:
						return { value: undefined, done: true };
				}
			}
		};
		return iterator;
	}
};

for (const el of object) {
	console.log(el);
}

// take(n, iterable)
function take(n, iterable) {
	const iter = iterable[Symbol.iterator]();
	return {
		[Symbol.iterator]() {
			return this;
		},
		next() {
			if (n > 0) {
				n--;
				return iter.next();
			} else {
				return { done: true };
			}
		}
	};
}
const arr = ["a", "b", "c", "d"];
for (const x of take(2, arr)) {
	console.log(x);
}
