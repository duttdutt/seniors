Array.prototype.myJoin = function(separator = ",") {
    let result = "";

    for (let i = 0; i < this.length; i++) {
        if (this[i] === null || typeof this[i] === "undefined") {
            // NOTE: конвертируются к пустой строке, а не пропускаются
            // continue;
            this[i] = "";
        }

        // NOTE: избегаем вставки разделителя в конец
        if ((this.length - i) === 1) {
            result += String(this[i]);
            continue;
        }

        result += String(this[i]) + separator;
    }

    return result;
}