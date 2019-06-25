const fib = [3, 5, 8, 13, 21, 34];

// actual functionaliy array methods
const maped = fib.map(num => num * 2); // map functionality
const even = fib.filter(num => num % 2 === 0); // filter functionality
const num = fib.findIndex(num => num % 2 === 0); // findIndex functionality
const numb = fib.reduce(num => num )

// console.log(maped);
// console.log(even);
// console.log(num);

function mapClone(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = callback(arr[i]);
  };
  return newArr;
}

function filterClone(arr, callback) {
  const filteredArr = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      filteredArr[j] = arr[i];
      j++;
    };
  };
  return filteredArr;
}

function findIndexClone(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) return i;
  };
  return -1;
}

// iterate through every item and invokes the 'callback'
// with an 'iniialValue' iterate through the array and set the 'acc' to the result of 'callback'
// without an 'initialValue' the acc starts off as the first item in array

function reduceClone(arr, callback, initialValue) {
  let acc = initialValue;
  let i = 0;
  if(initialValue === undefined) {
    i = 1;
    acc = arr[0];
  }
  for (i; i < arr.length; i++) {
    acc = callback(acc, arr[i]);
  }
  return acc;
}

module.exports = {
  mapClone,
  filterClone,
  findIndexClone,
  reduceClone
}
