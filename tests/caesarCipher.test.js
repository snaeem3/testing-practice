import caesarCipher from '../scripts/caesarCipher';

test('Correctly shifts abc by positive shift factor', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
  expect(caesarCipher('abc', 2)).toBe('cde');
});

test('Correctly shifts abc by negative shift factor', () => {
  expect(caesarCipher('bcd', -1)).toBe('abc');
  expect(caesarCipher('cde', -2)).toBe('abc');
});

test('Correctly shifts abc by 0', () => {
  expect(caesarCipher('bcd', 0)).toBe('bcd');
});

test('Correctly shifts z', () => {
  expect(caesarCipher('z', 1)).toBe('a');
  expect(caesarCipher('z', 2)).toBe('b');
});

test('Maintains case', () => {
  expect(caesarCipher('CaSe', 1)).toBe('DbTf');
});

test('Does not shift punctuation', () => {
  expect(caesarCipher('?.!', 1)).toBe('?.!');
  expect(caesarCipher('?.!', 2)).toBe('?.!');
});

test('Correctly shifts string with punctuation', () => {
  expect(caesarCipher('qrs?t', 1)).toBe('rst?u');
});
