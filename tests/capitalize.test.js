import capitalize from '../scripts/capitalize';

test('Returns capitalized string', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Returns empty string on empty string input', () => {
  expect(capitalize('')).toBe('');
});
