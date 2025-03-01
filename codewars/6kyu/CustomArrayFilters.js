// https://www.codewars.com/kata/53fc954904a45eda6b00097f/
Array.prototype.even = function() {
  return this.filter(v => Number.isInteger(v) && v % 2 === 0);
}

Array.prototype.odd = function() {
  return this.filter(v => Number.isInteger(v) && v % 2 !== 0);
}

Array.prototype.under = function(num) {
  return this.filter(v => Number.isInteger(v) && v < num)
}

Array.prototype.over = function(num) {
  return this.filter(v => Number.isInteger(v) && v > num);
}

Array.prototype.inRange = function(min, max) {
  return this.filter(v => Number.isInteger(v) && v >= min && v <= max)
}
