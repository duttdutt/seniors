// https://www.codewars.com/kata/52efefcbcdf57161d4000091/
function count(string) {
    const result = new Map()

    for (const char of string) {
        if (result.has(char)) {
            result.set(char, result.get(char) + 1)
        } else {
            result.set(char, 1)
        }
    }

    return Object.fromEntries(result)
}
