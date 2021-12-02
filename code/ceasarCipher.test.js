const ceasarCipher = require('./ceasarCipher')

test('ceasar cipher no shift', () => {
  expect(ceasarCipher('hello world', 0)).toBe('hello world');
})

test('ceasar cipher shift 3', () => {
  expect(ceasarCipher('i want some ketchup', 3)).toBe('l zdqw vrph nhwfkxs')
})

test('ceasar cipher shift 7', () => {
  expect(ceasarCipher('coffee!', 7)).toBe('jvmmll!')
})

test('ceasar cipher shift 20', () => {
  expect(ceasarCipher('who wants to go to the park?', 20)).toBe('qbi quhnm ni ai ni nby jule?')
})