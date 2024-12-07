// https://www.codewars.com/kata/6534ea9defdd85005848c2bd/solutions/javascript
async function getState(promise) {
    const result = await Promise.race([
        promise.then(
            () => {
                return 'fulfilled'
            },
            () => {
                return 'rejected'
            }
        ),
        new Promise(resolve => setTimeout(() => resolve('pending'), 0)),
    ])

    return result === 'pending' ? 'pending' : result
}
