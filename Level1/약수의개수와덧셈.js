const left = 24;
const right = 27;
function solution(left, right) {
  let sum = 0;
  for (i = left; i <= right; i++) {
    let count = 0;
    for (j = 1; j <= i; j++) {
      i % j === 0 ? count++ : null;
    }
    count % 2 === 0 ? (sum = sum + i) : (sum = sum - i);
    count = 0;
  }
  return sum;
}
solution(left, right);
