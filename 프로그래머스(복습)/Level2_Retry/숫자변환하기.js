const x = 10;
const y = 40;
const n = 5;

function solution(x, y, n) {
  const target = [2, 3, n];
  let count = 0;
  while (sum <= y) {
    count = count + 1;
    for (let i = 0; i < target.length; i++) {
      let sum;
      i === 2 ? (sum = x + n) : (sum = x * target[i]);

      if (sum === y) {
        return count;
      }
    }
  }

  return -1;
}
