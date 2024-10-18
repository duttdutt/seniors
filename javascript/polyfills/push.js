Array.prototype.myPush = function(...argsToPush) {
    const oldLength = this.length;

    for (let index = 0; index < argsToPush.length; index++) {
        this[oldLength + index] = argsToPush[index];
    }

    return this.length;
}