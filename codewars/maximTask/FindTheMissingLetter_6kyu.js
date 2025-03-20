// https://www.codewars.com/kata/5839edaa6754d6fec10000a2
function findMissingLetter(array) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const expectedCase = array[0] === array[0].toUpperCase() ? 'upper' : 'lower'
    const startLetter = array[0].toLowerCase()

    const fullSequence = alphabet.slice(alphabet.indexOf(startLetter))
    const letterPairs = array.map((letter, index) => ({
        expected: fullSequence[index],
        actual: letter.toLowerCase(),
    }))

    for (const pair of letterPairs) {
        if (pair.actual !== pair.expected) {
            return expectedCase === 'upper'
                ? pair.expected.toUpperCase()
                : pair.expected
        }
    }
}
