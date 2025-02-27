// https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(numbers) {
    const arr = numbers.split(" ").map(v => +v);

    return `${Math.max(...arr)} ${Math.min(...arr)}`;
}
