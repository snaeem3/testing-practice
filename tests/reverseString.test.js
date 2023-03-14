import reverseString from '../scripts/reverseString';

test('Reverses "hello"', () => {
  expect(reverseString('hello')).toBe('olleh');
});
