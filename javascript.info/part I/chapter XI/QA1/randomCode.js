/* --- Снабжение обычной ф-ии функциональностью промисов --- */
function myPromiseFunc() {
    return new Promise((res, _) => {
        res(1);
    });
}

myPromiseFunc().then(result => console.log(result)); // 1

/* --- Что придет в then, если в resolve ничего не передали */
new Promise((res, _) => res()).then(res => console.log(res));  // undefined
new Promise((_, rej) => rej()).catch(rej => console.log(rej)); // undefined

/* --- Игнорирование return исполнителем --- */
console.log("return 1:", new Promise((_res, _rej) => {
    _res(2);
    return 1;
}).then(res => console.log(res)));

/* --- Ошибка в executor после resolve --- */
new Promise((res, rej) => {
    res(1);
    throw new Error('hi'); // игнорируется
})
    .then(res => console.log(res)) // 1
    .catch(err => console.log("err:", err))
/* --- Ошибка в executor до resolve --- */
new Promise((res, rej) => {
    throw new Error('hi');
    res(1); // игнорируется
})
    .then(res => console.log(res))
    .catch(err => console.log("err:", err)) // Error: hi