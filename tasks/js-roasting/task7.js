/* --- Мемо-функция --- */
// Давай представим, что мы вызываем одну и туже функцию с одними и теми же параметрами.
// Было бы круто, чтобы в этом случае она возвращала результат из кэша.
// Если там пусто запускаем как обычно то, что получили сохраняем.
const plus = (a, b) => {
  return a + b;
};

const memo = (fn) => {
  const cache = new Map();

  return (...args) => {
    const stringArgs = args.toString();

    if (cache.has(stringArgs)) {
      console.log('Get return value from cache:');
      return cache.get(stringArgs);
    }

    const result = fn(...args);

    cache.set(stringArgs, result);

    return result;
  };
};

const memoPlus = memo(plus);

console.log(memoPlus(1, 2)); // 3 (вызов plus)
console.log(memoPlus(3, 1)); // 4 (вызов plus)
console.log(memoPlus(1, 2)); // 3 (обращение к cache)