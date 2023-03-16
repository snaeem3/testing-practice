import analyzeArray from '../scripts/analyzeArray';

test('Correctly computes average', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('Correctly computes min', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test('Correctly computes max', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test('Correctly computes length', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
