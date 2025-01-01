/**
 * Принимает массив(или итерируемый объект) промисов и возвращает один промис,
 * который является результатом выполнения всех промисов в массиве.
 *
 * @template T
 * @param {Iterable<T | PromiseLike<T>>} iterable - Массив (или итерируемый объект) промисов.
 * @returns {Promise<T[]>} Промис, который является результатом выполнения всех промисов в массиве.
 * Если один из промисов отклонится, результатом будет отклонение первого промиса.
 */
/* OKAY */
const promisesResolved = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
]
Promise.all(promisesResolved).then(results => {
    console.log(results) // [1, 2, 3]
})

/* Error */
const promisesRejected = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.reject(3),
]
Promise.all(promisesRejected).then(results => {
    console.log(results) // rejected with the reason "3"
})
