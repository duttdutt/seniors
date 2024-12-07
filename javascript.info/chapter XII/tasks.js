// Псевдослучайный генератор
function* pseudoRandom(seed) {
  let previous = seed;

  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    previous = (previous * 16807) % 2147483647;
    yield previous;
  }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073