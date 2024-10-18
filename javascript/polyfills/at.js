Array.prototype.myAt = function (searchIndex = 0) {
    if (typeof searchIndex !== "number") {
        searchIndex = 0;
    }

    if (searchIndex < 0) {
        searchIndex += this.length;
    }

    return this[searchIndex];
}