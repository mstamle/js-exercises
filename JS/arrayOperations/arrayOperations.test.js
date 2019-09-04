const { isEmpty, map, reduce, length, filter, append, drop, take } = require('./arrayOperations')

describe('reduce', () => {
  it('should just return accumulator for an empty array', () => {
    expect(reduce((acc, item) => acc + 1, 0, [])).toBe(0)
  })
  it('should  return number of elements', () => {
    expect(reduce((acc, item) => acc + 1, 0, [1,2,3])).toBe(3)
  })
  it('should just return sum of the numbers', () => {
    expect(reduce((acc, item) => acc + item, 0, [1,2,3])).toBe(6)
  })
})

describe('return length', () => {
  it('should just return length of an array', () => {
    expect(length([])).toBe(0)
  })
 })


describe('map', () => {
  it('should not change the structure of the array', () => {
    const array = [1,2,3,4,5]
    expect(map(element => element, array)).toEqual(array)
  })
  it('should add 1', () => {
    const array = [1,2,3,4,5]
    const expectedResult = [2,3,4,5,6]
    expect(map(element => element + 1, array)).toEqual(expectedResult)
  })
})

describe('filter', () => {
  it('returns filtered elements', () => {
    const array = [1,2,3,4,5]
    expect(filter(element => element <= 2, array)).toEqual([1, 2])
  })
 })


describe('isEmpty', () => {
  it('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true)
  })

  it('should return false for non-empty array', () => {
    [0, '0', [], {}].forEach ( element =>
      expect(isEmpty([element])).toBe(false)
    )
  });
});
describe('append', () => {
  const array = [1, 2, 3, 4]
  it('should return a new array with an appended element', () => {
    expect(append(5, array)).toEqual([ 1, 2, 3, 4, 5])
  })
});
describe('drop', () => {
  const array = [1, 2, 3, 4]
  it('should return a new array without dropped elements', () => {
    expect(drop(2, array)).toEqual([3,4])
  })
});
describe('take', () => {
  const array = [1, 2, 3, 4]
  it('should return a new array without dropped elements', () => {
    expect(take(9, array)).toEqual(array)
    expect(take(9, array)).toHaveLength(4)
    expect(take(9, array)).not.toBe(array)
    
  })
});
