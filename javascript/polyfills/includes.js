Array.prototype.myIncludes = function(searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
        if (Object.is(this[i], searchElement)) {
            return true;
        }
    }

    return false;
}