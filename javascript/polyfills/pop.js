Array.prototype.myPop = function() {
    if (this.length === 0) return undefined;

    const poppedElement = this[this.length - 1];

    this.length -= 1;

    return poppedElement;
}