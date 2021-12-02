const capitalize = require('./capitalize')

test('GiA to be Gia', () => {
  expect(capitalize('GiA')).toBe('Gia');
})

test('GIA to be Gia', () => {
  expect(capitalize('GIA')).toBe('Gia');
})

test('gia to be Gia', () => {
  expect(capitalize('gia')).toBe('Gia');
})