Array.prototype.myConcat = function(...argsToConcat) {
    return [...this, ...argsToConcat];
}