import * as calculator from '../scripts/calculator';

test('adds 4 + 1 = 5', () => {
  expect(calculator.add(4, 1)).toBe(5);
});

test('subtracts 4 - 1 = 3', () => {
  expect(calculator.subtract(4, 1)).toBe(3);
});

test('multiplies 3 x 8 = 24', () => {
  expect(calculator.multiply(3, 8)).toBe(24);
});

test('divides correctly with non-zero denominator', () => {
  expect(calculator.divide(12, 6)).toBe(2);
  expect(calculator.divide(9, 3)).toBe(3);
});

test('divides by zero returns error', () => {
  expect(() => {
    calculator.divide(12, 0);
  }).toThrow('Cannot divide by zero');
});
