const alphabetKey = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

export default function caesarCipher(str, shiftFactor) {
  const chars = str.split('');
  const result = [];
  chars.forEach((char) => {
    if (char.toLowerCase() in alphabetKey) {
      const currentNum = alphabetKey[char.toLowerCase()];
      const newNum = (currentNum + shiftFactor) % 26;
      if (char === char.toLowerCase()) {
        result.push(getKeyByValue(alphabetKey, newNum));
      } else {
        result.push(getKeyByValue(alphabetKey, newNum).toUpperCase());
      }
    } else {
      result.push(char);
    }
  });
  return result.join('');
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
