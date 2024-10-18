Array.prototype.myMap = function(callback) {
    if (typeof callback !== "function") {
        throw new TypeError(`${typeof callback} ${callback} is not a function`);
    }

    const resultArray = [];

    for (let i = 0; i < this.length; i++) {
        resultArray.push(
            callback(this[i], i, this)
        )
    }
    
    return resultArray;
}