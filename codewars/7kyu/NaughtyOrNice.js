// https://www.codewars.com/kata/5662b14e0a1fb8320a00005c
/* Using `JSON reviver` */
function naughtyOrNice(data) {
    let nice = 0;
    let naughty = 0;
    
    const obj = JSON.stringify(data, function reviver(key, value) {
      let values = Object.values(value)
        values.forEach(obj => {
          const a = Object.entries(obj).flat(Infinity)
          for (const el of a) {
            if (el == 'Nice') nice++;
            if (el == 'Naughty') naughty++;
          }
        });
      return value
    })
    
    if (nice > naughty) return 'Nice!'
    else if (nice === naughty) return 'Nice!'
    else return 'Naughty!'
}
/* Other */
function naughtyOrNice(data) {
    let naughtyCounter = 0;
    
    for (const month in data) {
      for (const day in data[month]) {
        naughtyCounter += data[month][day] === 'Nice' ? 1 : -1;
      }
    }
    
    return naughtyCounter < 0
        ? 'Naughty!'
        : 'Nice!';
}