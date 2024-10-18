Array.prototype.myIndexOf = function(searchElement, fromIndex = 0) {
    let indexOfElement;

    if (fromIndex < 0) {
        fromIndex += this.length;
    }

    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === searchElement) {
            indexOfElement = i;
            break;
        }
    }

    return indexOfElement ?? -1;
}