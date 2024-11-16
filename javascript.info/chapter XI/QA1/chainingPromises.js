/** @section Цепочка промисов.
 * Из экземпляра промиса возвращает успешно выполненый промис, благодаря чему
 * можно чейнится и создавать цевочки промисов через потребители.
 *
 * Результаты каждого промиса передаются в следующий промис.
 *
 * Потребитель также возвращают промис.
 *
 * new Promise -> then -> then -> then
 */
new Promise(function (res, _) {
  return res(1);
})
  .then((result) => {
    console.log("chaining #1:", result);
    return result * 2;
  })
  .then((result) => {
    console.log("chaining #2:", result);
    return result * 2;
  })
  .then((result) => {
    console.log("chaining #3:", result);
    return result * 2;
  });

/** @section Цепочка одного промиса.
 * При назначении раздельных обработчиков, они не передают результат промиса
 * друг другу, действуют независимо, тем самым обрабатывая результат отдельно.
 */
let promise = new Promise((res, _) => {
  return res(0);
});
// Независимый обработчик #1
promise.then(function (result) {
  console.log("independent #1:", result); // 0
  return result;
});
// Независимый обработчик #2
promise.then(function (result) {
  console.log("independent #2:", result); // 0
  return result + 1;
});
// Независимый обработчик #3
promise.then(function (result) {
  console.log("independent #3:", result); // 0
  return result + 2;
});

/** @section Промисы в потребителе.
 * Можно вернуть промис в потребителе.
 *
 * Все дальнейшие потребители в цепочке, будут ждать его выполнения.
 */
promise = new Promise((res, _) => res(1));

/* Пример 1 */
promise
  .then((result) => {
    console.log("value outside #1:", result); // 1 (**)
    // Возвращаем промис в потребителе:
    return (
      new Promise((res, _) => res(result * 2))
        // В промисе, возвращаемым потребителем, обрабатываем значение
        .then((result) => {
          console.log("value inside #1:", result); // 2
          return result + 1;
        })
        .then((result) => {
          console.log("value inside #2:", result); // 3
          return result + 1;
        })
        .then((result) => {
          console.log("value inside #3:", result); // 4
          return result; // (*)
        })
    );
  })
  .then((result) => {
    // Сюда придет результат из (*), а не из (**)
    console.log("value outside #2:", result); // 4
    return new Promise((res, _) => res(result * 2));
  })
  .then((result) => {
    console.log("value outside #3:", result); // 8
  });

/* Пример 2 */
promise
  .then((result) => {
    return result;
  })
  .then((result) => {
    console.log("value #1:", result); // 1
    return new Promise((res, _) => {
      setTimeout(() => res(result * 2), 3000);
    });
  })
  .then((result) => {
    /* Не начнет исполнение, пока не завершится промис выше. Логично, так как ждет return. */
    result += 1;
    console.log("value #2:", result);
  });
