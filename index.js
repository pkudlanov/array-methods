const fib = [3, 5, 8, 13, 21, 34];

// actual functionaliy array methods
const maped = fib.map(num => num * 2); // map functionality
const even = fib.filter(num => num % 2 === 0); // filter functionality
const num = fib.findIndex(num => num % 2 === 0); // findIndex functionality

// console.log(maped);
// console.log(even);
// console.log(num);

function mapClone(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = callback(arr[i]);
  }
  return newArr;
}

function filterClone(arr, callback) {
  const filteredArr = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      filteredArr[j] = arr[i];
      j++;
    }
  }
  return filteredArr;
}

// it returns number
// itterate over array
// * if the item is good return index
// * if item is bad continue
// return -1 if no matches found
function findIndexClone(arr, callback) {
  const index = 2;
  return index;
}

module.exports = {
  mapClone,
  filterClone,
  findIndexClone
}
