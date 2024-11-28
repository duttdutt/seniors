Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) return resolve(promises)

        const result = []
        let resolvedCounter = 0
        let index = 0

        promises.forEach(promise => {
            promise
                .then(value => {
                    result[index] = value
                    index++
                    resolvedCounter++

                    if (resolvedCounter === promises.length) resolve(result)
                })
                .catch(reason => reject(reason))
        })
    })
}

Promise.myAll([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
]).then(values => {
    console.log('All resolved:', values) // Ожидается: [1, 2, 3]
})

Promise.myAll([
    Promise.resolve(1),
    Promise.reject(new Error('Error 2')),
    Promise.resolve(3),
]).catch(error => {
    console.error('One rejected:', error) // Ожидается: Error: Error 2
})

Promise.myAll([
    Promise.reject(new Error('Error 1')),
    Promise.reject(new Error('Error 2')),
    Promise.reject(new Error('Error 3')),
]).catch(error => {
    console.error('All rejected:', error) // Ожидается: Error: Error 1
})

Promise.myAll([]).then(values => {
    console.log('Empty array:', values) // Ожидается: []
})

Promise.myAll([
    new Promise(resolve => setTimeout(() => resolve(1), 100)),
    new Promise(resolve => setTimeout(() => resolve(2), 200)),
    new Promise(resolve => setTimeout(() => resolve(3), 300)),
]).then(values => {
    console.log('All resolved with delay:', values) // Ожидается: [1, 2, 3]
})

Promise.myAll([
    new Promise(resolve => setTimeout(() => resolve(1), 100)),
    new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Error 2')), 200)
    ),
    new Promise(resolve => setTimeout(() => resolve(3), 300)),
]).catch(error => {
    console.error('Mixed with delay, one rejected:', error) // Ожидается: Error: Error 2
})
