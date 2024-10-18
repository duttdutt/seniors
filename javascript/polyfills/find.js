Array.prototype.myFind = function(callback) {
    if (typeof callback !== "function") {
        throw new TypeError(`${typeof callback} ${callback} is not a function`);
    }

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }

    return undefined;
}