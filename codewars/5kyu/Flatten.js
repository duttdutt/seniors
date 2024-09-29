// https://www.codewars.com/kata/513fa1d75e4297ba38000003
function flatten(...stack) {
  const result = [];

  while (stack.length) {
    const el = stack.shift();

    if (Array.isArray(el)) {
      stack.unshift(...el)
      continue;
    }

    result.push(el)
  }

  return result
}
