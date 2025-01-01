/* реализовать Promise.anyResolved - реждектимся, только если все зареджектились, а ресолвимся,
если любой заресолвился. anyResolved будет отличаться от any тем, что принимает доп. аргумент
- количество промисов, после которых ресолвится. Например, если кинуть ему 3, то будет ждать 3
заресолвивишихся и потом сразу сам заресолвит, а если 3 не получится - реджектит.
Нужно сделать оптимально, чтоб когда уже 100% не хватит оставшихся промисов для ресолва,
не ждать их, а сразу реджектить. */
Promise.anyResolved = function (promises, count) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) return resolve(promises)

        const resolvedPromises = []
        const rejectedPromises = []
        let resolvedCount = 0
        let rejectedCount = 0

        promises.forEach(promise => {
            promise
                .then(value => {
                    if (resolvedCount < count) {
                        resolvedCount++
                        resolvedPromises.push(value)
                    }
                    if (resolvedCount === count) {
                        resolve(resolvedPromises)
                    }
                })
                .catch(reason => {
                    rejectedPromises[rejectedCount] = reason
                    rejectedCount++
                    if (rejectedCount + resolvedCount === promises.length) {
                        reject(
                            new AggregateError(
                                rejectedPromises,
                                'All promises are rejected'
                            )
                        )
                    }
                })
        })
    })
}
