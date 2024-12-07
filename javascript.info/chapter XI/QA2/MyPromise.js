class MyPromise {
    PromiseState = 'pending'
    PromiseResult = undefined
    TaskQueue = [] // когда состояние поменяется на settled -> разрешаем очередь и выдаем результат

    constructor(executor) {
        /* Errors */
        if (!new.target)
            throw new TypeError(
                `${MyPromise.name} constructor cannot be invoked without 'new'`
            )

        if (typeof executor !== 'function')
            throw new TypeError(
                `Promise resolver ${executor} is not a function`
            )

        /* Callbacks */
        const resolve = value => {
            if (this.PromiseState === 'pending') {
                this.PromiseState = 'fulfilled'
                this.PromiseResult = value
                this.TaskQueue.forEach(task => task.onFulfilled(value))
            }
        }

        const reject = reason => {
            if (this.PromiseState === 'pending') {
                this.PromiseState = 'rejected'
                this.PromiseResult = reason
                this.TaskQueue.forEach(task => task.onRejected(reason))
            }
        }

        executor(resolve, reject)
    }

    static resolve(value) {
        if (this.PromiseState === 'pending') {
            this.PromiseState = 'fulfilled'
            this.PromiseResult = value
        }

        return new MyPromise((resolve, _reject) => resolve(value))
    }

    static reject(reason) {
        if (this.PromiseState === 'pending') {
            this.PromiseState = 'rejected'
            this.PromiseResult = reason
        }

        return new MyPromise((_resolve, reject) => reject(reason))
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            const handleFulfilled = value => {
                try {
                    if (typeof onFulfilled === 'function') {
                        const result = onFulfilled(value)

                        resolve(result)
                    }

                    resolve(value)
                } catch (error) {
                    reject(error)
                }
            }

            const handleRejected = reason => {
                try {
                    if (typeof onRejected === 'function') {
                        const result = onRejected(reason)

                        resolve(result)
                    } else {
                        reject(reason)
                    }
                } catch (error) {
                    reject(error)
                }
            }

            if (this.PromiseState === 'fulfilled') {
                handleFulfilled(this.PromiseResult)
            } else if (this.PromiseState === 'rejected') {
                handleRejected(this.PromiseResult)
            } else {
                this.TaskQueue.push({
                    onFulfilled: handleFulfilled,
                    onRejected: handleRejected,
                })
            }
        })
    }

    catch(onRejected) {
        return this.then(undefined, onRejected)
    }
}

Object.setPrototypeOf(MyPromise, Function.prototype)

const promise = new MyPromise((resolve, reject) => {
    resolve(1)
})

async function getState(promise) {
    const settled = Promise.allSettled([promise])

    let result = ''

    await settled.then(res => console.log('res', res))

    let promiseAwait = settled.then(res => {
        res.map(promise => {
            result += promise.status
        })
    })

    return result
}

const promise1 = new Promise((res, rej) => {})

console.log(getState(promise1))
