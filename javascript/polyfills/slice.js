Array.prototype.mySlice = function(indexStart = 0, indexEnd = this.length) {
    const resultArr = [];

    if (indexStart < 0) {
        indexStart += this.length;
    }

    if (indexEnd < 0) {
        indexEnd += this.length;
    }

    for (let i = indexStart; i < indexEnd; i++) {
        resultArr.push(this[i]);
    }

    return resultArr;
}