Array.prototype.myShift = function() {
    if (this.length === 0) return undefined;

    const shiftedEl = this[0];

    // NOTE: this.length - 1, чтобы явно не перебирать несуществующий элемент
    for (let i = 0; i < this.length - 1; i++) {
        this[i] = this[i + 1];
    }

    this.length -= 1;

    return shiftedEl;
}