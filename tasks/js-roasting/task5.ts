/* --- Прибавление чисел к строке --- */
// Есть строка, на конце число.
// Нужно прибавить единичку к этому числу и вернуть результат.
// Если числа нет, то будем считать, что оно равно нулю. 
// На примере с кодом будет понятнее, 
/**
 * Increments the number at the end of a given string.
 *
 * @param {string} str The string to increment the number at the end of.
 * @returns {string} The string with the number at the end incremented.
 */
const incrementNumberAtEndOfString = (str: string): string => {
    const reversedString: string = str.split("").reverse().join("");

    let number: number = parseInt(reversedString);
    number = isNaN(number) ? 0 : number;

    const numberLength: number = `${number}`.length;

    const result = reversedString.split("").slice(numberLength);
    result.unshift((number + 1).toString());

    return result.reverse().join('');
};

console.log("return:", incrementNumberAtEndOfString("jsgrill1")); // jsgrill2
console.log("return:", incrementNumberAtEndOfString("jsgrill")); // jsgrill1
console.log("return:", incrementNumberAtEndOfString("jsgrill9")); // jsgrill10
console.log("return:", incrementNumberAtEndOfString("jsgrill99")); // jsgrill100
console.log("return:", incrementNumberAtEndOfString("")); // 1