const fib = [3, 5, 8, 13, 21, 34];

// actual functionaliy array methods
const maped = fib.map(num => num * 2); // map functionality
const even = fib.filter(num => num % 2 === 0); // filter functionality

console.log(maped);
console.log(even);

function mapClone(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = callback(arr[i]);
  }
  return newArr;
}

function filterClone(arr, callback) {
}

module.exports = {
  fib,
  mapClone
}
