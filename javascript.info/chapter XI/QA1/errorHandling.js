fetch('1'); // TypeError: Failed to parse URL from 1

fetch('https://lol')
   .catch(error => console.log("Catch:", "\n", error)); // TypeError: fetch failed

fetch('https://lol')
   .then(test => test)
   .then(test => test)
   .then(test => test)
   .catch(error => console.log("Catch:", "\n", error)); // TypeError: fetch failed

fetch('https://lol')
   .then()
   .then()
   .then()
   .catch(error => console.log("Catch:", "\n", error)); // TypeError: fetch failed

fetch('https://lol'); // TypeError: fetch failed

new Promise((_, rej) => {
  rej(new Error('Works without catch')); // Error: Works without catch
})

new Promise((_, rej) => {
  rej(new Error('catch works'));
})
  .catch(error => console.log("Catch:", error)); // Catch: Error: catch works

new Promise((res, _) => {
  res();
})
  .then(_ => {
    throw new Error('Works in catch!');
  })
  .catch(error => console.log("Catch:", error)); // Catch: Error: Works in catch!

new Promise((res, _) => {
  res(1);
  throw new Error('Works in catch!');
})
  .then(test => console.log(1)) // 1
  .catch(error => console.log("Catch:", error)); // nothing


/* Проброс ошибки из catch */
// Продолжение работы после отсутствия return в catch:
// #1
new Promise((_res, _rej) => {
  throw new Error('Error for catch!');
})
  .catch(error => {
    console.log('catch работает!');
  })
  .then(() => {
    console.log('then работает!');
  })

// #2
new Promise((_res, _rej) => {
  throw new Error('Error for catch!');
})
  .catch(error => error)
  .then(() => {
    console.log('then работает!');
  })

// #3
new Promise((_res, _rej) => {
  throw new Error('Error for catch!');
})
  .catch(error => {
    console.log(error.name, ':', error.message);
    throw new Error('OH SHIT, HERE WE GO AGAIN');
  })
  .then(() => console.log('then работает!'))
  .catch(error => {
    throw new Error('OH SHIT, HERE WE GO AGAIN');
  })
  .then(() => console.log('then работает!'))