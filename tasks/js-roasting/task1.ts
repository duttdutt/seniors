/* --- Цепочка-калькулятор --- */
// Есть несколько самостоятельных функций:
// const sum = (x, y) => x + y;
// const minus = (x, y) => x - y;
// Твоя задача сделать так чтобы их можно было вызывать цепочкой (зачейнить):
// с.sum(4, 5).sum(5).minus(4) …
// а результат работы получить посредством вызова метода execute:
// с.sum(4, 5).sum(5).minus(4).execute() // 10
// Первая функция получает все аргументы. В последующих, первый аргумент - результат выполнения предыдущей функции,
// а остальные передаются вручную. 
// Учти, что цепочки могут быть переиспользованы.
interface InputFunctions {
  sum: (x: number, y: number) => number;
  minus: (x: number, y: number) => number;
  double: (x: number) => number;
  addOne: (x: number) => number;
  accumulator?: number | null;
  execute?: () => number;
}

const sum = (x: number, y: number): number => x + y;
const minus = (x: number, y: number): number => x - y;
const double = (x: number): number => sum(x, x);
const addOne = (x: number): number => sum(x, 1);

const chain = (functions) => {
  Object.keys(functions).forEach((functionName: string) => {
    const originalFunction = functions[functionName];

    functions[functionName] = (...args: number[]) => {
      functions.accumulator = functions.accumulator === undefined || functions.accumulator === null
        ? originalFunction(...args)
        : originalFunction(functions.accumulator, ...args);

      return functions;
    };
  });

  functions.execute = (): number => {
    const result = functions.accumulator as number;
    functions.accumulator = null; // Reset accumulator after execution
    return result;
  };

  return functions;
}

const c = chain({ sum, minus, double, addOne });

console.log(
  c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute()
); // 72

console.log(c.sum(4, 5).sum(5).execute()); // 14
