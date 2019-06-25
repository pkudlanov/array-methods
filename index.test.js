const { mapClone, filterClone, findIndexClone } = require('./index');

const fib = [3, 5, 8, 13, 21, 34];

describe('testing mapClone function', () => {
  it('returns an array', () => {
    const result = mapClone(fib, num => num * 2);
    expect(result).toEqual(expect.any(Array));
  });

  it('takes an array and a callback and returns new array with the new values of each called callback', () => {
    const result = mapClone(fib, (num) => num * num);
    expect(result).toEqual([9, 25, 64, 169, 441, 1156]);
  });

  it('checks to make sure both arrays are the same length', () => {
    const result = mapClone(fib, (num) => num * num);
    expect(result.length).toEqual(fib.length);
    // expect(result).toHaveLength(fib.length) // same as above
  });
});

describe('testing filterClone function', () => {
  it('returns an array', () => {
    const result = filterClone(fib, num => num % 2 === 0);
    expect(result).toEqual(expect.any(Array));
  });

  it('iterates over the array and if its true for callback condition adds it to new array', () => {
    const result = filterClone(fib, num => num % 2 === 0);
    expect(result).toEqual([8, 34]);
  });
});

describe('testing findIndexClone', () => {
  it('returns a number', () => {
    const result = findIndexClone(fib, num => num % 2 === 0);
    expect(typeof result).toEqual(typeof 3);
  });
});
