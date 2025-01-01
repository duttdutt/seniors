Promise.myAny = function (promises) {
    return new Promise((resolve, reject) => {
        let resolved = false
        let rejectedCounter = 0
        const errors = []
        let index = 0

        promises.forEach(promise => {
            promise
                .then(value => {
                    if (!resolved) {
                        resolved = true
                        resolve(value)
                    }
                })
                .catch(reason => {
                    errors[index] = reason
                    index++
                    if (rejectedCounter === promises.length) {
                        reject(
                            new AggregateError(
                                errors,
                                'All promises are rejected'
                            )
                        )
                    }
                })
        })
    })
}

// Проверка 1: Все промисы разрешаются
Promise.myAny([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
]).then(value => {
    console.log('All resolved:', value) // Ожидается: 1
})

// Проверка 2: Один промис разрешается, остальные отклоняются
Promise.myAny([
    Promise.reject(new Error('Error 1')),
    Promise.resolve(2),
    Promise.reject(new Error('Error 3')),
]).then(value => {
    console.log('One resolved:', value) // Ожидается: 2
})

// Проверка 3: Все промисы отклоняются
Promise.myAny([
    Promise.reject(new Error('Error 1')),
    Promise.reject(new Error('Error 2')),
    Promise.reject(new Error('Error 3')),
]).catch(error => {
    console.error('All rejected:', error) // Ожидается: AggregateError с тремя ошибками
})

// Проверка 4: Смешанные промисы, но один разрешается
Promise.myAny([
    Promise.reject(new Error('Error 1')),
    Promise.resolve(2),
    Promise.reject(new Error('Error 3')),
    Promise.resolve(4),
]).then(value => {
    console.log('Mixed, one resolved:', value) // Ожидается: 2
})

// Проверка 5: Пустой массив промисов
Promise.myAny([]).catch(error => {
    console.error('Empty array:', error) // Ожидается: AggregateError с пустым массивом ошибок
})
