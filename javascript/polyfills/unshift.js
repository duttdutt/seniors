Array.prototype.myUnshift = function(...argsToUnshift) {
    /* First variant(using .push) */
    // const self = this;
    // this.length = 0;
    // this.push(...argsToUnshift)
    // this.push(...self)

    // return this.length;
    /* Second Variant(without array methods) */
    const inputLength = argsToUnshift.length;

    for (let i = 0; i < inputLength; i++) {
        this[i + inputLength] = this[i]
    }

    for (let j = 0; j < inputLength; j++) {
        this[j] = argsToUnshift[j];
    }

    return this.length;
}