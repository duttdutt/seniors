Array.prototype.myLastIndexOf = function(searchElement, fromIndex = this.length) {
    let indexOfElement;

    if (fromIndex < 0) {
        fromIndex += this.length;
    }

    if (fromIndex >= this.length) {
        fromIndex = this.length - 1;
    }

    for (let i = fromIndex; i >= 0; i--) {
        if (this[i] === searchElement) {
            indexOfElement = i;
            break;
        }
    }

    return indexOfElement ?? -1;
}

const numbers = [2, 5, 9, 2];
console.log(numbers.myLastIndexOf(2)); // 3
console.log(numbers.myLastIndexOf(7)); // -1
console.log(numbers.myLastIndexOf(2, 3)); // 3
console.log(numbers.myLastIndexOf(2, 2)); // 0
console.log(numbers.myLastIndexOf(2, -2)); // 0
console.log(numbers.myLastIndexOf(2, -1)); // 3