Array.prototype.myFindIndex = function(callback) {
    if (typeof callback !== "function") {
        throw new TypeError(`${typeof callback} ${callback} is not a function`);
    }

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return i;
        }
    }

    return -1;
}