const calculator = require('./calculator')

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toEqual(3);
})

test('subtracts 2 - 2 to equal 0', () => {
  expect(calculator.sub(2, 2)).toEqual(0);
})

test('multiplies 2 * 2 to equal 4', () => {
  expect(calculator.mul(2, 2,)).toEqual(4);
})

test('divides 2 / 2 to equal 1', () => {
  expect(calculator.div(2, 2,)).toEqual(1);
})