const reverseString = require('./reverseString')

test('hello to be elloh', () => {
  expect(reverseString('hello')).toBe('olleh');
})

test('Sasu to be usaS', () => {
  expect(reverseString('Sasu')).toBe('usaS');
})

test('More cookies Please to be esaelP seikooc eroM', () => {
  expect(reverseString('More cookies Please')).toBe('esaelP seikooc eroM');
})