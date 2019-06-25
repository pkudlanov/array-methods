const fib = [3, 5, 8, 13, 21, 34];

function mapClone(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    newArr.push(callback(num));
  }
  return newArr;
}

module.exports = {
  fib,
  mapClone
}
