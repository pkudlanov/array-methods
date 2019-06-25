const { fib, mapClone } = require('./index');

describe('testing array method clones', () => {
  it('takes an array and a callback and returns new array with the new values of each called callback', () => {
    const result = mapClone(fib, (num) => num * num);
    expect(result).toEqual([9, 25, 64, 169, 441, 1156]);
  });
});