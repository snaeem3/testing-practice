export default function analyzeArray(arr) {
  const result = {};
  result.length = arr.length;
  result.min = Math.min(...arr);
  result.max = Math.max(...arr);
  result.average =
    arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    arr.length;

  return result;
}
