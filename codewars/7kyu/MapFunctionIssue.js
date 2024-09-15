// https://www.codewars.com/kata/560fbc2d636966b21e00009e
var func = function(item){
  if (item % 2 === 0) return true;
  return false;
}

function map(arr, somefunction){
  if (typeof somefunction !== 'function') return 'given argument is not a function'
  if (arr.some(v => isNaN(v))) return 'array should contain only numbers'

  const result = [];

  for (const el of arr) {
    result.push(func(el));
  }

  return result;
}
