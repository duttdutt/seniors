Array.prototype.myForEach = function(callback) {
    if (typeof callback !== "function") {
        throw new TypeError(`${typeof callback} ${callback} is not a function`);
    }

    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }

    return undefined;
}