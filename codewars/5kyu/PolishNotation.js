// https://www.codewars.com/kata/5e5b7f55c2e8ae0016f42339/
function calculate(expression) {
  const array = expression.split(" ");
  let result = [];

  while (array.length) {
    const el = arrOfTokens[i];

    if (!Number.isNaN(el)) {
      result.push(+el);
    } else {
      const operand1 = result.pop();
      const operand2 = result.pop();

      switch (el) {
        case "+":
          result.push(operand1 + operand2);
          break;
        case "-":
          result.push(operand1 - operand2);
          break;
        case "/":
          result.push(operand1 / operand2);
          break;
        case "*":
          result.push(operand1 * operand2);
          break;
      }
    }
  }
  return result[0];
}