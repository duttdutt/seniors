// https://www.codewars.com/kata/54da5a58ea159efa38000836
function findOdd(A) {
    const map = new Map();

    for (const el of A) {
        if (!map.has(el)) {
            map.set(el, 1);
        } else {
            map.set(el, map.get(el) + 1);
        }
    }

    let result;
    const arr = Array.from(map.entries()).forEach(([key, value]) => {
        if (value % 2 !== 0) result = key;
    });

    return result;
}
